import TextFiledCard from '../TextFiledCard/TextFiledCard';
import PostInputBoxWrapper from './styled';

const PostInputForm = ({
  onChangeInputHandler,
  onBlurInputHandler,
  onChangeSelectBoxHandler,
  errorMessage,
  postValue,
}) => {
  const { itemName, link, price } = errorMessage;
  return (
    <PostInputBoxWrapper id='postForm'>
      <select
        name='itemName'
        id='itemName'
        onChange={onChangeSelectBoxHandler}
        onBlur={onBlurInputHandler}
        value={postValue.itemName}
      >
        <option value=''>카테고리 선택</option>
        <option value='study'>스터디 구해요!</option>
        <option value='music'>음악 추천 해요!</option>
        <option value='tips'>공부 꿀팁 나눠요!</option>
      </select>
      {itemName && <p>{itemName}</p>}
      <TextFiledCard
        name='link'
        onChange={onChangeInputHandler}
        onBlur={onBlurInputHandler}
        value={postValue.link}
      >
        내용
      </TextFiledCard>
      {link && <p>{link}</p>}
      {postValue.itemName === 'study' && (
        <TextFiledCard
          type='text'
          name='price'
          min={1}
          max={10}
          onBlur={onBlurInputHandler}
          onChange={onChangeInputHandler}
          value={postValue.price}
        >
          모집 인원
        </TextFiledCard>
      )}
      {price && <p>{price}</p>}
    </PostInputBoxWrapper>
  );
};

export default PostInputForm;
