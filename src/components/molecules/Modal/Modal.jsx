import { Link } from 'react-router-dom';
import { ModalList, ModalWrapper, OpacityBg } from './styled';

const Modal = ({ onClose, setOnModal, setOnAlert, modalCont }) => {
  const { text } = modalCont;
  return (
    <OpacityBg onClick={onClose}>
      <ModalWrapper>
        <div className='bar' />
        <ul>
          {Object.keys(text).map((textName) => (
            <Link to={text[textName]} key={textName}>
              <ModalList
                textName={textName}
                onClick={() => {
                  setOnModal((prev) => !prev);
                  setOnAlert((prev) => !prev);
                }}
              >
                {textName}
              </ModalList>
            </Link>
          ))}
        </ul>
      </ModalWrapper>
    </OpacityBg>
  );
};
export default Modal;
