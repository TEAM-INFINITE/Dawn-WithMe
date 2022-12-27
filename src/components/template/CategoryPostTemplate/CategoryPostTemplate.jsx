import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import PostImgBox from '../../molecules/PostImgBox/PostImgBox';
import PostInputForm from '../../molecules/PostInputForm/PostInputForm';
import TopNavButtonBar from '../../molecules/TopNavButtonBar/TopNavButtonBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import CategoryPostTemplateWrapper from './styled';

const CategoryPostTemplate = ({
  onChangeImageUpload,
  onChangeInputHandler,
  onBlurInputHandler,
  onClickSubmitHandler,
  onChangeSelectBoxHandler,
  imgSrc,
  errorMessage,
  postValue,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavButtonBar
          size='ms'
          width='90px'
          disabled={
            !postValue.itemName ||
            !postValue.link ||
            !postValue.price ||
            !postValue.itemImage ||
            errorMessage.itemName ||
            errorMessage.link ||
            errorMessage.price
          }
          form='postForm'
          type='submit'
          onClick={onClickSubmitHandler}
        >
          저장
        </TopNavButtonBar>
      </HeaderWrapper>
      <MainWrapper>
        <CategoryPostTemplateWrapper>
          <PostImgBox
            imgSrc={imgSrc}
            onChangeImageUpload={onChangeImageUpload}
            errorMessage={errorMessage}
          />
          <PostInputForm
            onChangeInputHandler={onChangeInputHandler}
            onChangeSelectBoxHandler={onChangeSelectBoxHandler}
            onBlurInputHandler={onBlurInputHandler}
            errorMessage={errorMessage}
            postValue={postValue}
          />
        </CategoryPostTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default CategoryPostTemplate;
