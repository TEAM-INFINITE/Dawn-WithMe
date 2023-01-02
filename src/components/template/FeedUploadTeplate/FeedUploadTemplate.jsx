import Img from '../../atoms/Img/Img';
import Textarea from '../../atoms/Textarea/Textarea';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import FeedImgBox from '../../molecules/FeedImgBox/FeedImgBox';
import FeedTextForm from '../../molecules/FeedTextForm/FeedTextForm';
import TopNavButtonBar from '../../molecules/TopNavButtonBar/TopNavButtonBar';
import { FeedUploadWrapper, FeedTextWrapper } from './styled';

const FeedUploadTemplate = ({ user }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavButtonBar
          size='ms'
          width='90px'
          form='feedForm'
          disabled='disabled'
          type='submit'
        >
          업로드
        </TopNavButtonBar>
      </HeaderWrapper>
      <MainWrapper>
        <FeedUploadWrapper>
          <Img src={user.image} alt='프로필 사진' width='42px' height='42px' />
          <FeedTextWrapper>
            <Textarea placeholder='게시글 입력하기...' />
            <FeedImgBox />
          </FeedTextWrapper>
        </FeedUploadWrapper>
      </MainWrapper>
    </>
  );
};

export default FeedUploadTemplate;
