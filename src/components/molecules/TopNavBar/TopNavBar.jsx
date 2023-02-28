import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import TopNavBarWarpper from './styled';
import Img from '../../atoms/Img/Img';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import searchIcon from '../../../assets/images/icon-search.png';
import Button from '../../atoms/Button/Button';
import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import { alertAtom, isErrorAtom, modalAtom } from '../../../recoil/atom';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';

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
  keyword,
}) => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const [alert, setAlert] = useRecoilState(alertAtom);
  const setIsError = useSetRecoilState(isErrorAtom);

  const navigate = useNavigate();

  const onClickModalListHandler = (buttonName) => {
    if (buttonName === '설정 및 개인정보') {
      setModal({ ...modal, isActive: { ...modal.isActive, header: false } });
      setAlert({ ...alert, isActive: { ...alert.isActive, header: false } });
      navigate('/myprofile');
    } else if (buttonName === '로그아웃') {
      setAlert({
        ...alert,
        isActive: { ...alert.isActive, header: true },
        text: { alertText: `${buttonName}하시겠어요?`, text: buttonName },
      });
    }
  };

  const onClickAlertEventHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    setModal({
      ...modal,
      isActive: { ...modal.isActive, header: false },
    });
    setAlert({
      ...modal,
      isActive: { ...alert.isActive, header: false },
    });
    navigate('/');
  };

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
            <Img src={backIcon} width='22px' alt='뒤로가기' />
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
              setModal({
                ...modal,
                isActive: { ...modal.isActive, header: true },
                modalListText: [
                  { id: 1, text: '로그아웃' },
                  { id: 2, text: '설정 및 개인정보' },
                ],
              });
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
          <TextFiled
            placeholder='사용자의 닉네임을 검색하세요!'
            onChange={onChangeSearch}
            value={keyword}
          />
        )}
      </TopNavBarWarpper>
      {modal.isActive.header && (
        <Modal onClickModalListHandler={onClickModalListHandler} />
      )}
      {alert.isActive.header && (
        <Alert onClickAlertEventHandler={onClickAlertEventHandler} />
      )}
    </>
  );
};

export default TopNavBar;
