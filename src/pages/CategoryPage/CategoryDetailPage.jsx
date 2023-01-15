import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import getCategoryDetail from '../../api/category/getCategoryDetail';
import { alertAtom, modalAtom } from '../../recoil/atom';
import CategoryDetailTemplate from '../../components/template/CategoryDetailTemplate/CategoryDetailTemplate';
import deleteCategoryPost from '../../api/category/deleteCategoryPost';

const CategoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [modal, setModal] = useRecoilState(modalAtom);
  const [alert, setAlert] = useRecoilState(alertAtom);

  const { data: detailData, isLoading } = useQuery(['categoryDetail', id], () =>
    getCategoryDetail(id),
  );

  const deleteCategoryPostMutation = useMutation(deleteCategoryPost, {
    onSuccess(resData) {
      console.log(resData);
      if (resData.message === '삭제되었습니다.') {
        setModal({ ...modal, isActive: { ...modal.isActive, post: false } });
        setAlert({ ...alert, isActive: { ...alert.isActive, post: false } });
        navigate('/home');
      }
    },
  });

  const onClickMoreHandler = (postid) => {
    setModal({
      ...modal,
      isActive: { ...modal.isActive, post: true },
      id: postid,
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
    setAlert({
      ...alert,
      text: { alertText: `게시물을 ${text} 할까요?`, text },
    });

    if (text === '수정') {
      setModal({
        ...modal,
        isActive: { ...modal.isActive, post: false },
      });
      navigate(`/category/edit/${modal.id}`);
    } else if (text === '삭제')
      setAlert({ ...alert, isActive: { ...alert.isActive, post: true } });
  };

  return (
    <CategoryDetailTemplate
      detailData={detailData?.product}
      isLoading={isLoading}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickAlertEventHandler={onClickAlertEventHandler}
      modal={modal}
      alert={alert}
      isError={isError}
    />
  );
};

export default CategoryDetailPage;
