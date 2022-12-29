import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopNavBarWarpper from './styled';
import Img from '../../atoms/Img/Img';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import searchIcon from '../../../assets/images/icon-search.png';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';

const TopNavBar = ({ children, onClick, cont, more, search }) => {
  // 모달창 열리고 닫히는
  const [onModal, setOnModal] = useState(false);
  const [onAlert, setOnAlert] = useState(false);

  // 모달 내용
  const modalObj = [];
  const pathName = useLocation().pathname;
  console.log(pathName);
  if (pathName.includes('chatdetail')) {
    modalObj.push({
      text: { '채팅방 나가기': '/chat' },
      alertText: [],
    });
  } else {
    modalObj.push({
      text: { '설정 및 개인정보': '/myprofile', 로그아웃: '' },
      alertText: ['로그아웃하시겠어요?', '로그아웃'],
    });
  }

  const modalCont = modalObj[0];

  return (
    <>
      <TopNavBarWarpper>
        {cont === 'text' && <h2>{children}</h2>}
        {cont === 'back' && (
          <Link to={-1}>
            <Img src={backIcon} width='22px' />
          </Link>
        )}
        {search && (
          <button className='search' type='button' onClick={onClick}>
            <Img src={searchIcon} alt='검색' width='24px' />
          </button>
        )}
        {more && (
          <button
            className='more'
            type='button'
            onClick={() => {
              setOnModal((prev) => !prev);
            }}
          >
            <Img src={moreIcon} alt='더보기' width='24px' />
          </button>
        )}
      </TopNavBarWarpper>
      {onModal && (
        <Modal
          onClose={() => setOnModal(false)}
          setOnModal={setOnModal}
          setOnAlert={setOnAlert}
          modalCont={modalCont}
        />
      )}
      {onAlert && (
        <Alert
          questionText={modalCont.alertText[0]}
          rightBtnText={modalCont.alertText[1]}
          onClose={() => setOnAlert(false)}
          setOnModal={setOnModal}
        />
      )}
    </>
  );
};

export default TopNavBar;
