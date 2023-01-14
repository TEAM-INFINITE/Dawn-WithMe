import { useRecoilState } from 'recoil';
import { alertAtom, modalAtom } from '../../../recoil/atom';
import NewAlertModalWrapper from './styled';

const NewAlertModal = ({ onClickAlertEventHandler }) => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const [alert, setAlert] = useRecoilState(alertAtom);

  const onClickCancelModal = () => {
    setModal({
      ...modal,
      isActive: { header: false, post: false, comment: false },
    });
    setAlert({
      ...alert,
      isActive: { header: false, post: false, comment: false },
    });
  };

  return (
    <NewAlertModalWrapper>
      <p>{alert.text.alertText}</p>
      <button type='button' onClick={onClickCancelModal}>
        취소
      </button>
      <button type='button' onClick={onClickAlertEventHandler}>
        {alert.text.text}
      </button>
    </NewAlertModalWrapper>
  );
};

export default NewAlertModal;
