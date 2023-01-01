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
  return (
    <>
      <HeaderWrapper>
        <TopNavButtonBar
          size='ms'
          width='90px'
          form='editProfile'
          onClick={onClickSubmitHandler}
        >
          저장
        </TopNavButtonBar>
      </HeaderWrapper>
      <MainWrapper>
        <EditProfileTemplateWrapper>
          <PostImgBox
            onChangeImageUpload={onChangeImageUpload}
            imgSrc={profileData.image}
            errorMessage={errorMessage}
          />
          <EditProfileForm
            profileData={profileData}
            onChangeInputHandler={onChangeInputHandler}
          />
        </EditProfileTemplateWrapper>
      </MainWrapper>
    </>
  );
};

export default EditProfileTemplate;
