import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import getCategoryDetail from '../../api/category/getCategoryDetail';
import {
  AlertTextAtom,
  isAlertAtom,
  isModalAtom,
  modalAtom,
} from '../../recoil/atom';
import CategoryDetailTemplate from '../../components/template/CategoryDetailTemplate/CategoryDetailTemplate';
import deleteCategoryPost from '../../api/category/deleteCategoryPost';

const CategoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useRecoilState(isModalAtom);
  const [isAlert, setIsAlert] = useRecoilState(isAlertAtom);
  const [modalValue, setModalValue] = useRecoilState(modalAtom);
  const [alertText, setAlertText] = useRecoilState(AlertTextAtom);
  const {
    data: detailData,
    isLoading,
    isError,
  } = useQuery(['categoryDetail', id], () => getCategoryDetail(id));

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

  if (isError) return <p>에러</p>;

  return (
    <CategoryDetailTemplate
      detailData={detailData?.product}
      isLoading={isLoading}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      onClickAlertEventHandler={onClickAlertEventHandler}
      isModal={isModal}
      isAlert={isAlert}
      setIsModal={setIsModal}
      textArray={textArray}
      alertText={alertText}
    />
  );
};

export default CategoryDetailPage;
