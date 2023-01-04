import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import Img from '../../atoms/Img/Img';
import PostImgBoxWrapper, { ImgBackground } from './styled';
import uploadIcon from '../../../assets/images/img-button.png';
import profileUploadIcon from '../../../assets/images/s-upload-file.png';
import profileImg from '../../../assets/images/profile-logo.png';

const PostImgBox = ({ onChangeImageUpload, imgSrc, errorMessage }) => {
  const fileRef = useRef(null);
  const location = useLocation();

  const onClickImgHandler = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };
  const basicProfileImg =
    imgSrc === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : imgSrc;

  return (
    <PostImgBoxWrapper>
      {location.pathname === '/category/post' && <p>이미지 등록</p>}
      <ImgBackground backBg={basicProfileImg}>
        <input
          type='file'
          accept='image/*'
          id='imageUpload'
          ref={fileRef}
          onChange={onChangeImageUpload}
        />
        <button type='button' onClick={onClickImgHandler}>
          <Img
            src={
              location.pathname === '/category/post'
                ? uploadIcon
                : profileUploadIcon
            }
          />
        </button>
      </ImgBackground>
      {location.pathname === '/category/post' && errorMessage.itemImage && (
        <p>{errorMessage.itemImage}</p>
      )}
    </PostImgBoxWrapper>
  );
};

export default PostImgBox;
