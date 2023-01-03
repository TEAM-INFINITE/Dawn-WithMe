import { useRef } from 'react';
import Img from '../../atoms/Img/Img';
import uploadIcon from '../../../assets/images/upload-file.png';
import FileUploadWrapper from './styled';

const FileUpload = ({ onChangeImagesUpload }) => {
  const fileRef = useRef(null);

  const onClickImgHandler = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };

  return (
    <FileUploadWrapper>
      <input
        type='file'
        accept='image/*'
        id='feedimageUpload'
        multiple
        ref={fileRef}
        onChange={onChangeImagesUpload}
      />
      <button type='button' onClick={onClickImgHandler}>
        <Img src={uploadIcon} />
      </button>
    </FileUploadWrapper>
  );
};

export default FileUpload;
