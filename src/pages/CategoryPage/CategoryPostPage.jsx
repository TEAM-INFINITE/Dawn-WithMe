import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { url } from '../../api/axios-api';
import createCategoryPost from '../../api/category/createCategoryPost';
import postImage from '../../api/imgUpload/postImage';
import CategoryPostTemplate from '../../components/template/CategoryPostTemplate/CategoryPostTemplate';

const CategoryPostPage = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [isInputBlur, setIsInputBlur] = useState({
    itemName: false,
    price: false,
    link: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    itemName: '',
    price: '',
    link: '',
    itemImage: '',
  });
  const [postValue, setPostValue] = useState({
    itemName: '',
    price: 0,
    link: '',
    itemImage: imgSrc,
  });
  const navigate = useNavigate();

  const isValids = (target, targetName) => {
    if (targetName === 'price') {
      return /^[2-8]{1}$/g.test(target);
    }

    return true;
  };

  const imageUploadMutation = useMutation(postImage, {
    onSuccess(resData) {
      setImgSrc(`${url}/${resData.filename}`);
      setPostValue({ ...postValue, itemImage: `${url}/${resData.filename}` });
    },
    onError(err) {
      console.log(err);
    },
  });

  const createCategoryPostMutation = useMutation(createCategoryPost, {
    onSuccess(resData) {
      navigate(`/home`);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onBlurInputHandler = (event) => {
    setIsInputBlur({
      ...isInputBlur,
      [event.target.name]: true,
    });

    if (!event.target.value) {
      setErrorMessage({
        ...errorMessage,
        [event.target.name]: '필수 정보입니다.',
      });
    }
  };

  const onChangeImageUpload = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    imageUploadMutation.mutate(formData);
  };

  const onChangeSelectBoxHandler = (event) => {
    const { value } = event.target;

    if (value === 'study') {
      setPostValue({ ...postValue, itemName: value, price: 0 });
    } else {
      setPostValue({ ...postValue, itemName: value, price: 2 });
      setErrorMessage({ ...errorMessage, price: '' });
    }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;

    setPostValue({ ...postValue, [name]: value });

    if (!isValids(value, name)) {
      if (name === 'price') {
        setErrorMessage({
          ...errorMessage,
          [name]: '2~8 명의 숫자만 입력 가능합니다.',
        });
      }
    } else {
      setErrorMessage({ ...errorMessage, [name]: '' });
    }
  };

  const onClickSubmitHandler = (event) => {
    event.preventDefault();

    createCategoryPostMutation.mutate({
      product: { ...postValue, price: +postValue.price },
    });
  };

  console.log(postValue);

  return (
    <CategoryPostTemplate
      onChangeInputHandler={onChangeInputHandler}
      onChangeImageUpload={onChangeImageUpload}
      onBlurInputHandler={onBlurInputHandler}
      onClickSubmitHandler={onClickSubmitHandler}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      imgSrc={imgSrc}
      errorMessage={errorMessage}
      postValue={postValue}
    />
  );
};

export default CategoryPostPage;
