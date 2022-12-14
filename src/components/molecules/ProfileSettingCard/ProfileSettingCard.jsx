import TextLabel from '../../atoms/Label/TextLabel/TextLabel';
import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import ProfileFiledCardWrapper from './styled';

const ProfileSettingCard = ({ childern }) => {
  return (
    <ProfileFiledCardWrapper>
      <TextLabel>{childern}</TextLabel>
      <TextFiled />
    </ProfileFiledCardWrapper>
  );
};

export default ProfileSettingCard;
