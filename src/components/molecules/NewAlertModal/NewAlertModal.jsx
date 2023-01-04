import { useSetRecoilState } from 'recoil';
import { isAlertAtom, isModalAtom } from '../../../recoil/atom';
import NewAlertModalWrapper from './styled';

const NewAlertModal = ({ alertText, onClickAlertEventHandler }) => {
  const setIsModal = useSetRecoilState(isModalAtom);
  const setIsAlert = useSetRecoilState(isAlertAtom);

  const onClickCancelModal = () => {
    setIsModal(false);
    setIsAlert(false);
  };
  return (
    <NewAlertModalWrapper>
      <p>게시물을 {alertText}할까요?</p>
      <button type='button' onClick={onClickCancelModal}>
        취소
      </button>
      <button type='button' onClick={onClickAlertEventHandler}>
        {alertText}
      </button>
    </NewAlertModalWrapper>
  );
};

export default NewAlertModal;
