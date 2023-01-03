import { useRef } from 'react';
import Img from '../../atoms/Img/Img';
import uploadIcon from '../../../assets/images/upload-file.png';
import FeedImgBoxWrapper from './styled';

const FeedImgBox = () => {
  const fileRef = useRef(null);

  const onClickImgHandler = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };

  return (
    <FeedImgBoxWrapper>
      <input type='file' accept='image/*' id='imageUpload' ref={fileRef} />
      <button type='button' onClick={onClickImgHandler}>
        <Img src={uploadIcon} />
      </button>
    </FeedImgBoxWrapper>
  );
};

export default FeedImgBox;
