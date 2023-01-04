import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isAlertAtom, isModalAtom, modalAtom } from '../../recoil/atom';
import CategoryTemplate from '../../components/template/CategoryTemplate/CategoryTemplate';

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useRecoilState(isModalAtom);
  const [isAlert, setIsAlert] = useRecoilState(isAlertAtom);
  const [modalValue, setModalValue] = useRecoilState(modalAtom);

  const postListData = location.state.data;
  const textArray = [
    { id: 1, text: '삭제' },
    { id: 2, text: '수정' },
  ];

  const onClickMoreHandler = (id) => {
    setIsModal(true);
    setModalValue(id);
  };

  const onClickModalListHandler = (text) => {
    if (text === '수정') navigate(`/category/post/${modalValue}`);
    else if (text === '삭제') setIsAlert(true);
  };

  console.log(modalValue);
  return (
    <CategoryTemplate
      postListData={postListData}
      isModal={isModal}
      setIsModal={setIsModal}
      onClickMoreHandler={onClickMoreHandler}
      onClickModalListHandler={onClickModalListHandler}
      textArray={textArray}
    />
  );
};

export default CategoryPage;
