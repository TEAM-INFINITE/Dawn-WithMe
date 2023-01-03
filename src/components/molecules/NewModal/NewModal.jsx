import NewModalWrapper, { NewModalBox } from './styled';

const NewModal = ({ isModal, setIsModal }) => {
  const onClickModalClose = () => {
    setIsModal(false);
  };
  return (
    <NewModalWrapper onClick={onClickModalClose}>
      <NewModalBox>
        <button type='button' className='modal-btn' onClick={onClickModalClose}>
          {' '}
        </button>
        <ul>
          <li>테스트1</li>
          <li>테스트2</li>
        </ul>
      </NewModalBox>
    </NewModalWrapper>
  );
};

export default NewModal;
