import { useRef } from 'react';
import Img from '../../atoms/Img/Img';
import PostImgBoxWrapper, { ImgBackground } from './styled';
import uploadIcon from '../../../assets/images/img-button.png';

const PostImgBox = ({
  onChangeImageUpload,

  imgSrc,
  errorMessage,
}) => {
  const fileRef = useRef(null);

  const onClickImgHandler = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };

  return (
    <PostImgBoxWrapper>
      <p>이미지 등록</p>
      <ImgBackground backBg={imgSrc}>
        <input
          type='file'
          accept='image/*'
          id='imageUpload'
          ref={fileRef}
          onChange={onChangeImageUpload}
        />
        <button type='button' onClick={onClickImgHandler}>
          <Img src={uploadIcon} />
        </button>
      </ImgBackground>
      {errorMessage.itemImage && <p>{errorMessage.itemImage}</p>}
    </PostImgBoxWrapper>
  );
};

export default PostImgBox;
