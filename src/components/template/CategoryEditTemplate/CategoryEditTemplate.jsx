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
  onChangeImageUpload,
  onChangeSelectBoxHandler,
  onChangeInputHandler,
  onClickSubmitHandler,
  errorMessage,
}) => {
  console.log(postValue);
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
          {!isLoading && (
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
        </CategoryEditTemplateWrapper>
      </MainWrapper>
    </>
  );
};

export default CategoryEditTemplate;
