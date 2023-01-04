import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../../api/axios-api';
import getCategoryDetail from '../../api/category/getCategoryDetail';
import updateCategoryPost from '../../api/category/updateCategoryPost';
import postImage from '../../api/imgUpload/postImage';
import CategoryEditTemplate from '../../components/template/CategoryEditTemplate/CategoryEditTemplate';

const CategoryEditPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [postValue, setPostValue] = useState({
    itemName: '',
    price: 0,
    link: '',
    itemImage: '',
  });
  const { isLoading, isError } = useQuery(
    ['categoryDetail', id],
    () => getCategoryDetail(id),
    {
      onSuccess(resData) {
        const { itemImage, itemName, link, price } = resData.product;

        setPostValue({ itemImage, itemName, link, price });
      },
    },
  );

  const [errorMessage, setErrorMessage] = useState({
    itemName: '',
    price: '',
    link: '',
    itemImage: '',
  });

  const isValids = (target, targetName) => {
    if (targetName === 'price') {
      return /^[2-8]{1}$/g.test(target);
    }

    return true;
  };

  const updateCategoryPostMutation = useMutation(updateCategoryPost, {
    onSuccess(resData) {
      console.log(resData);
      navigate(`/home`);
    },
    onError(error) {
      console.log(error);
    },
  });

  const imageUploadMutation = useMutation(postImage, {
    onSuccess(resData) {
      setPostValue({ ...postValue, itemImage: `${url}/${resData.filename}` });
    },
    onError(err) {
      console.log(err);
    },
  });

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

  const onClickSubmitHandler = () => {
    updateCategoryPostMutation.mutate({ id, product: postValue });
  };

  return (
    <CategoryEditTemplate
      postValue={postValue}
      isLoading={isLoading}
      onChangeImageUpload={onChangeImageUpload}
      onChangeSelectBoxHandler={onChangeSelectBoxHandler}
      onChangeInputHandler={onChangeInputHandler}
      onClickSubmitHandler={onClickSubmitHandler}
      errorMessage={errorMessage}
    />
  );
};

export default CategoryEditPage;
