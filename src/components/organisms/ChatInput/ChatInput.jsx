import ChatInputWrapper from './styled';

const ChatInput = ({ chatValue, onChange, onSubmit }) => {
  const { image, text } = chatValue;
  console.log(chatValue);

  return (
    <ChatInputWrapper>
      <div onSubmit={onSubmit}>
        <label htmlFor='input-file'>
          <input
            type='file'
            accept='image/*'
            name='image'
            id='input-file'
            defaultValue={image}
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <input
          type='text'
          name='text'
          id='input-text'
          placeholder='메시지 입력하기...'
          defaultValue={text}
          onChange={onChange}
        />
        <button
          type='submit'
          disabled={chatValue.image.length < 1 && chatValue.text.length < 1}
        >
          전송
        </button>
      </div>
    </ChatInputWrapper>
  );
};

export default ChatInput;
