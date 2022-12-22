import Img from '../../atoms/Img/Img';
import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import CommentInputWrapper from './styled';

const CommentInput = ({
  onChangeInputHandler,
  onSubmitButtonHandler,
  src,
  inputText,
}) => {
  return (
    <CommentInputWrapper>
      <Img src={src} alt='프로필 사진' width='36px' height='36px' />
      <TextFiled
        placeholder='댓글 입력하기...'
        value={inputText}
        onChange={onChangeInputHandler}
      />
      <button type='submit' onClick={onSubmitButtonHandler}>
        게시
      </button>
    </CommentInputWrapper>
  );
};

export default CommentInput;
