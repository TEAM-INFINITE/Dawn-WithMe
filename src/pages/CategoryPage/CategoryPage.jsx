import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import {
  AlertTextAtom,
  isAlertAtom,
  isModalAtom,
  modalAtom,
} from '../../recoil/atom';
import CategoryTemplate from '../../components/template/CategoryTemplate/CategoryTemplate';
import deleteCategoryPost from '../../api/category/deleteCategoryPost';

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const postListData = location.state.data;
  const [isModal, setIsModal] = useRecoilState(isModalAtom);
  const [isAlert, setIsAlert] = useRecoilState(isAlertAtom);
  const [modalValue, setModalValue] = useRecoilState(modalAtom);
  const [alertText, setAlertText] = useRecoilState(AlertTextAtom);
  const [postList, setPostList] = useState([...postListData]);
  const textArray = [
    { id: 1, text: '삭제' },
    { id: 2, text: '수정' },
  ];

  const deleteCategoryPostMutation = useMutation(deleteCategoryPost, {
    onSuccess(resData) {
      console.log(resData);
      if (resData.message === '삭제되었습니다.') {
        setPostList((prev) => {
          return [...prev].filter((post) => post.id !== modalValue);
        });
      }
      setIsModal(false);
      setIsAlert(false);
    },
    onError(error) {
      console.log(error);
    },
  });

  const onClickMoreHandler = (id) => {
    setIsModal(true);
    setModalValue(id);
  };

  const onClickAlertEventHandler = () => {
    deleteCategoryPostMutation.mutate({ productId: modalValue });
  };

  const onClickModalListHandler = (text) => {
    setAlertText(text);

    if (text === '수정') {
      setIsModal(false);
      setIsAlert(false);
      navigate(`/category/edit/${modalValue}`);
    } else if (text === '삭제') setIsAlert(true);
  };

  return (
    <CategoryTemplate
      postListData={postList}
      isModal={isModal}
      isAlert={isAlert}
      alertText={alertText}
      setIsModal={setIsModal}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickAlertEventHandler={onClickAlertEventHandler}
      textArray={textArray}
    />
  );
};

export default CategoryPage;
