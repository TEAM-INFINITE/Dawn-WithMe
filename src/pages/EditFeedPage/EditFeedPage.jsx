import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { url } from '../../api/axios-api';
import createFeedPost from '../../api/feed/createFeedPost';
import getFeedDetail from '../../api/feed/getFeedDetail';
import postImages from '../../api/imgUpload/postImages';
import getUserInfo from '../../api/user/getUserInfo';
import EditFeedTemplate from '../../components/template/EditFeedTemplate/EditFeedTemplate';

const EditFeedPage = () => {
  const { id } = useParams();
  // 게시물 불러오기
  const { data: postdata, isLoading: isPostLoading } = useQuery(
    ['detailfeed', id],
    () => {
      return getFeedDetail(id);
    },
  );

  const [imgSrc, setImgSrc] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [postValue, setPostValue] = useState({
    content: '',
    image: '',
  });
  const navigate = useNavigate();
  const imgString = postImg.join(',');

  // 유저 정보 불러오기
  const { data: userdata } = useQuery(['userInfo'], getUserInfo);

  // 여러개의 이미지 등록
  const imagesUploadMutation = useMutation(postImages, {
    onSuccess(resData) {
      console.log(resData);
      setImgSrc([
        ...imgSrc,
        { id: resData[0].filename, src: `${url}/${resData[0].filename}` },
      ]);
      setPostImg([...postImg, `${url}/${resData[0].filename}`]);
      setPostValue({ ...postValue });
    },
    onError(err) {
      console.log(err);
    },
  });

  // 게시글 등록
  const createFeedPostMutation = useMutation(createFeedPost, {
    onSuccess(resData) {
      console.log(resData);
      navigate(`/myprofile`);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onChangeTextHandler = (event) => {
    const { value } = event.target;
    setPostValue({
      ...postValue,
      content: value,
    });
  };

  const onChangeImagesUpload = (event) => {
    if (imgSrc.length > 2) {
      alert('사진은 최대 3장까지 업로드 가능합니다.');
      setImgSrc([...imgSrc.slice(0.3)]);
      setPostValue({ ...postValue });
    }
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    imagesUploadMutation.mutate(formData);
  };

  const onClickDeleteImg = (imgId) => {
    setImgSrc(imgSrc.filter((item, index) => index !== imgId));
    setPostImg(postImg.filter((item, index) => index !== imgId));
  };

  const onClickSubmit = (event) => {
    event.preventDefault();

    createFeedPostMutation.mutate({
      post: { ...postValue, image: imgString },
    });
  };

  if (isPostLoading) return <p>로딩 중...</p>;
  const { user } = userdata;
  const { content, image } = postdata.post;
  console.log(content, image);

  return (
    <EditFeedTemplate
      postdata={postdata}
      user={user}
      onChangeTextHandler={onChangeTextHandler}
      onClickDeleteImg={onClickDeleteImg}
      onChangeImagesUpload={onChangeImagesUpload}
      onClickSubmit={onClickSubmit}
      imgSrc={imgSrc}
      postValue={postValue}
    />
  );
};

export default EditFeedPage;
