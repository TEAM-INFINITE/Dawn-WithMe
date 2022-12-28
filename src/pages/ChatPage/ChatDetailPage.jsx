import { useState } from 'react';
import ChatUserTemplate from '../../components/template/ChatUserTemplate/ChatUserTemplate';

const ChatDetailPage = () => {
  const [chatValue, setChatValue] = useState({ image: '', text: '' });

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setChatValue({ ...chatValue, [name]: value });
  };

  const onSubmitButtonHandler = (event) => {
    event.preventDefault();
  };

  return (
    <ChatUserTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      chatValue={chatValue}
    />
  );
};

export default ChatDetailPage;
