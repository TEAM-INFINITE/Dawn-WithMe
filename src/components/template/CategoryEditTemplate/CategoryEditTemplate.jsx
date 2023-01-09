import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import PostImgBox from '../../molecules/PostImgBox/PostImgBox';
import PostInputForm from '../../molecules/PostInputForm/PostInputForm';
import TopNavButtonBar from '../../molecules/TopNavButtonBar/TopNavButtonBar';
import CategoryEditTemplateWrapper from './styled';

const CategoryEditTemplate = ({
  postValue,
  isLoading,
  isError,
  onChangeImageUpload,
  onChangeSelectBoxHandler,
  onChangeInputHandler,
  onClickSubmitHandler,
  errorMessage,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavButtonBar
          size='ms'
          width='90px'
          form='editCategoryPost'
          onClick={onClickSubmitHandler}
          disabled={
            !postValue.itemName ||
            // !postValue.itemImage ||
            !postValue.link ||
            !postValue.price ||
            errorMessage.itemName ||
            errorMessage.link ||
            errorMessage.price
          }
        >
          저장
        </TopNavButtonBar>
      </HeaderWrapper>
      <MainWrapper>
        <CategoryEditTemplateWrapper>
          {!isLoading && !isError && (
            <>
              <h2 className='hidden'>카테고리 게시글 수정 페이지</h2>
              <PostImgBox
                imgSrc={postValue.itemImage}
                onChangeImageUpload={onChangeImageUpload}
              />
              <PostInputForm
                postValue={postValue}
                onChangeSelectBoxHandler={onChangeSelectBoxHandler}
                onChangeInputHandler={onChangeInputHandler}
                errorMessage={errorMessage}
              />
            </>
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </CategoryEditTemplateWrapper>
      </MainWrapper>
    </>
  );
};

export default CategoryEditTemplate;
