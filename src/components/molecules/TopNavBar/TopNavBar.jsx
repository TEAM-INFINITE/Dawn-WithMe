import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import TopNavBarWarpper from './styled';
import Img from '../../atoms/Img/Img';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import searchIcon from '../../../assets/images/icon-search.png';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';
import Button from '../../atoms/Button/Button';
import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import { isErrorAtom } from '../../../recoil/atom';

const TopNavBar = ({
  children,
  onClick,
  cont,
  more,
  search,
  clickbtn,
  usersearch,
  disabled,
  size,
  width,
  text,
  onChangeSearch,
}) => {
  // 모달창 열리고 닫히는
  const [onModal, setOnModal] = useState(false);
  const [onAlert, setOnAlert] = useState(false);
  const setIsError = useSetRecoilState(isErrorAtom);
  // 모달 내용
  const modalObj = [];
  const pathName = useLocation().pathname;

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
        {cont === 'back' && (
          <Link
            to={-1}
            onClick={() => {
              setIsError(false);
            }}
          >
            <Img src={backIcon} width='22px' />
          </Link>
        )}
        {text === 'text' && <h2>{children}</h2>}
        {search && (
          <Link to='/search' className='search'>
            <Img src={searchIcon} alt='검색' width='24px' />
          </Link>
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
        {clickbtn && (
          <Button
            onClick={onClick}
            disabled={disabled}
            size={size}
            width={width}
          >
            {children}
          </Button>
        )}
        {usersearch && (
          <TextFiled placeholder='유저 검색' onChange={onChangeSearch} />
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
