import TextFiledCard from '../TextFiledCard/TextFiledCard';
import PostInputBoxWrapper from './styled';

const PostInputForm = ({
  onChangeInputHandler,
  onBlurInputHandler,
  errorMessage,
  postValue,
}) => {
  const { itemName, link, price } = errorMessage;
  return (
    <PostInputBoxWrapper id='postForm'>
      <select
        name='itemName'
        id='itemName'
        onChange={onChangeInputHandler}
        onBlur={onBlurInputHandler}
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
        >
          모집 인원
        </TextFiledCard>
      )}
      {price && <p>{price}</p>}
    </PostInputBoxWrapper>
  );
};

export default PostInputForm;
