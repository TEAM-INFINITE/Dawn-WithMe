import Img from '../../atoms/Img/Img';
import Textarea from '../../atoms/Textarea/Textarea';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import FileUpload from '../../molecules/FileUpload/FileUpload';
import TopNavButtonBar from '../../molecules/TopNavButtonBar/TopNavButtonBar';
import {
  FeedUploadWrapper,
  FeedTextWrapper,
  DeleteBtn,
  ImgWrapper,
} from './styled';

const EditFeedTemplate = ({
  user,
  onChangeTextHandler,
  onClickDeleteImg,
  onChangeImagesUpload,
  onClickSubmit,
  postImg,
  postValue,
}) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavButtonBar
          size='ms'
          width='90px'
          disabled={!postValue.content}
          form='feedForm'
          type='submit'
          onClick={onClickSubmit}
        >
          업로드
        </TopNavButtonBar>
      </HeaderWrapper>
      <MainWrapper>
        <FeedUploadWrapper>
          <Img src={user.image} alt='프로필 사진' width='42px' height='42px' />
          <FeedTextWrapper>
            <Textarea
              value={postValue.content}
              onChange={onChangeTextHandler}
            />
            <ImgWrapper>
              <ul>
                {postImg.map((image, index) => (
                  <li key={image.key}>
                    <Img src={image.src} className='priview-img' />
                    <DeleteBtn onClick={() => onClickDeleteImg(index)} />
                  </li>
                ))}
              </ul>
            </ImgWrapper>
            <FileUpload onChangeImagesUpload={onChangeImagesUpload} />
          </FeedTextWrapper>
        </FeedUploadWrapper>
      </MainWrapper>
    </>
  );
};

export default EditFeedTemplate;
