import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../../api/axios-api';
import getFeedDetail from '../../api/feed/getFeedDetail';
import putFeedPost from '../../api/feed/putFeedPost';
import postImages from '../../api/imgUpload/postImages';
import getMyProfile from '../../api/profile/getMyProfile';

import EditFeedTemplate from '../../components/template/EditFeedTemplate/EditFeedTemplate';

const EditFeedPage = () => {
  const { id } = useParams();
  const [arrImg, setArrImg] = useState([]);
  const [postImg, setPostImg] = useState([]);
  const [postValue, setPostValue] = useState({
    content: '',
    image: '',
  });
  const navigate = useNavigate();

  // 유저 정보 불러오기
  const { data: userdata } = useQuery(['userInfo'], getMyProfile);

  // 게시물 불러오기
  const { data: postdata, isLoading: isPostLoading } = useQuery(
    ['detailfeed', id],
    () => getFeedDetail(id),
    {
      onSuccess(resData) {
        console.log(resData);
        const { content, image } = resData.post;

        if (image !== '') {
          setPostValue({
            content,
            image,
          });
          setPostImg(
            image.split(',').map((item, index) => {
              return {
                key: Date.now() + index,
                src: item,
              };
            }),
          );
          setArrImg(image.split(','));
        } else {
          setPostValue({ content });
        }
      },
    },
  );

  // 여러개의 이미지 등록
  const imagesUploadMutation = useMutation(postImages, {
    onSuccess(resData) {
      console.log(resData);
      setPostImg([
        ...postImg,
        {
          key: Date.now(),
          src: `${url}/${resData[0].filename}`,
        },
      ]);
      setArrImg([...arrImg, `${url}/${resData[0].filename}`]);
      setPostValue({ ...postValue });
    },
    onError(err) {
      console.log(err);
    },
  });

  // 게시글 수정
  const putFeedPostMutation = useMutation(putFeedPost, {
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
    if (postImg.length > 2) {
      alert('사진은 최대 3장까지 업로드 가능합니다.');
      return;
    }
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    imagesUploadMutation.mutate(formData);
  };

  const onClickDeleteImg = (imgId) => {
    setPostImg(postImg.filter((item, index) => index !== imgId));
    setArrImg(arrImg.filter((item, index) => index !== imgId));
    setPostValue({ ...postValue });
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    putFeedPostMutation.mutate({
      id,
      post: { ...postValue, image: arrImg.join(',') },
    });
  };

  if (isPostLoading) return <p>로딩 중...</p>;
  const { user } = userdata;

  return (
    <EditFeedTemplate
      postdata={postdata}
      user={user}
      onChangeTextHandler={onChangeTextHandler}
      onClickDeleteImg={onClickDeleteImg}
      onChangeImagesUpload={onChangeImagesUpload}
      onClickSubmit={onClickSubmit}
      postValue={postValue}
      postImg={postImg}
    />
  );
};

export default EditFeedPage;
