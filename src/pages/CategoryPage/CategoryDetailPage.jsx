import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { toast } from 'react-toastify';
import getCategoryDetail from '../../api/category/getCategoryDetail';
import {
  alertTextAtom,
  isAlertAtom,
  isModalAtom,
  modalAtom,
} from '../../recoil/atom';
import CategoryDetailTemplate from '../../components/template/CategoryDetailTemplate/CategoryDetailTemplate';
import deleteCategoryPost from '../../api/category/deleteCategoryPost';

const CategoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isModal, setIsModal] = useRecoilState(isModalAtom);
  const [isAlert, setIsAlert] = useRecoilState(isAlertAtom);
  const [modalValue, setModalValue] = useRecoilState(modalAtom);
  const [alertText, setAlertText] = useRecoilState(alertTextAtom);
  const { data: detailData, isLoading } = useQuery(
    ['categoryDetail', id],
    () => getCategoryDetail(id),
    {
      onSuccess(resData) {
        if (resData.status === 404) {
          setIsError(true);
          toast.error(
            `서버에 문제가 있습니다 :( !
        잠시 후 시도해 주세요.`,
            {
              theme: 'dark',
              position: 'top-center',
              autoClose: 3000,
            },
          );
        }
      },
    },
  );

  const textArray = [
    { id: 1, text: '삭제' },
    { id: 2, text: '수정' },
  ];

  const deleteCategoryPostMutation = useMutation(deleteCategoryPost, {
    onSuccess(resData) {
      console.log(resData);
      if (resData.message === '삭제되었습니다.') {
        setIsModal(false);
        setIsAlert(false);
        navigate('/home');
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  const onClickMoreHandler = (postid) => {
    setIsModal(true);
    setModalValue(postid);
  };

  const onClickAlertEventHandler = () => {
    deleteCategoryPostMutation.mutate({ productId: modalValue });
  };

  const onClickModalListHandler = (text) => {
    setAlertText(text);

    if (text === '수정') navigate(`/category/edit/${modalValue}`);
    else if (text === '삭제') setIsAlert(true);
  };

  return (
    <CategoryDetailTemplate
      detailData={detailData?.product}
      isLoading={isLoading}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickAlertEventHandler={onClickAlertEventHandler}
      isModal={isModal}
      isAlert={isAlert}
      isError={isError}
      setIsModal={setIsModal}
      textArray={textArray}
      alertText={alertText}
    />
  );
};

export default CategoryDetailPage;
