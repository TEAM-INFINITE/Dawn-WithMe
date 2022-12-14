import TextLabel from '../../atoms/Label/TextLabel/TextLabel';
import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import UploadIconWrapper from './styled';
import UploadIcon from '../../../assets/images/upload-file.png';

const UploadICon = () => {
  return (
    <UploadIconWrapper>
      <TextLabel htmlFor='uploadIcon'>
        <img src={UploadIcon} alt='업로드아이콘' />
      </TextLabel>
      <TextFiled id='uploadIcon' type='file' />
    </UploadIconWrapper>
  );
};

export default UploadICon;
