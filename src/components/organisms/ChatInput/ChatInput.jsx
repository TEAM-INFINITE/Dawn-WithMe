import ChatInputWrapper from './styled';

const ChatInput = () => {
  return (
    <ChatInputWrapper>
      <div>
        <label htmlFor='input-file'>
          <input type='file' id='input-file' />
        </label>
      </div>
      <div>
        <input type='text' placeholder='메시지 입력하기...' />
        <button type='submit'>전송</button>
      </div>
    </ChatInputWrapper>
  );
};

export default ChatInput;
