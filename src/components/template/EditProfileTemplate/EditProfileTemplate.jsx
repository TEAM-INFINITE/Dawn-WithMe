import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import PostImgBox from '../../molecules/PostImgBox/PostImgBox';
import TopNavButtonBar from '../../molecules/TopNavButtonBar/TopNavButtonBar';
import EditProfileForm from '../../organisms/EditProfileForm/EditProfileForm';
import EditProfileTemplateWrapper from './styled';

const EditProfileTemplate = ({
  profileData,
  onChangeInputHandler,
  onChangeImageUpload,
  onClickSubmitHandler,
  errorMessage,
}) => {
  const { accountname, image, intro, username } = profileData;

  return (
    <>
      <HeaderWrapper>
        <TopNavButtonBar
          size='ms'
          width='90px'
          form='editProfile'
          onClick={onClickSubmitHandler}
          disabled={
            !accountname ||
            !image ||
            !intro ||
            !username ||
            errorMessage.username ||
            errorMessage.accountname
          }
        >
          저장
        </TopNavButtonBar>
      </HeaderWrapper>
      <MainWrapper>
        <EditProfileTemplateWrapper>
          <h2 className='hidden'>프로필 수정 페이지</h2>
          <PostImgBox
            onChangeImageUpload={onChangeImageUpload}
            imgSrc={profileData.image}
            errorMessage={errorMessage}
          />
          <EditProfileForm
            profileData={profileData}
            errorMessage={errorMessage}
            onChangeInputHandler={onChangeInputHandler}
          />
        </EditProfileTemplateWrapper>
      </MainWrapper>
    </>
  );
};

export default EditProfileTemplate;
