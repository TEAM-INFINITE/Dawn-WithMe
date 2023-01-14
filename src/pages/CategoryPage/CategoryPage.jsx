import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { alertAtom, modalAtom } from '../../recoil/atom';
import CategoryTemplate from '../../components/template/CategoryTemplate/CategoryTemplate';
import deleteCategoryPost from '../../api/category/deleteCategoryPost';

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const postListData = location.state.data;
  const [postList, setPostList] = useState([...postListData]);
  const [modal, setModal] = useRecoilState(modalAtom);
  const [alert, setAlert] = useRecoilState(alertAtom);

  const deleteCategoryPostMutation = useMutation(deleteCategoryPost, {
    onSuccess(resData) {
      console.log(resData);
      if (resData.message === '삭제되었습니다.') {
        setPostList((prev) => {
          return [...prev].filter((post) => post.id !== modal.id);
        });
      }
      setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
      setAlert({ ...alert, isActive: { ...alert.isActive, post: false } });
    },
    onError(error) {
      console.log(error);
    },
  });

  const onClickMoreHandler = (id) => {
    setModal({
      ...modal,
      isActive: { ...modal.isActive, post: true },
      id,
      modalListText: [
        { id: 1, text: '삭제' },
        { id: 2, text: '수정' },
      ],
    });
  };

  const onClickAlertEventHandler = () => {
    deleteCategoryPostMutation.mutate({ productId: modal.id });
  };

  const onClickModalListHandler = (text) => {
    if (text === '수정') {
      setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
      navigate(`/category/edit/${modal.id}`);
    } else if (text === '삭제')
      setAlert({
        ...alert,
        isActive: { ...alert.isActive, post: true },
        text: { alertText: `게시글을 ${text} 할까요?`, text },
      });
  };

  return (
    <CategoryTemplate
      postListData={postList}
      modal={modal}
      alert={alert}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickAlertEventHandler={onClickAlertEventHandler}
    />
  );
};

export default CategoryPage;
