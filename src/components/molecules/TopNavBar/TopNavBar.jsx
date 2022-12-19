import { Link } from 'react-router-dom';
import TopNavBarWarpper from './styled';
import Img from '../../atoms/Img/Img';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import Button from '../../atoms/Button/Button';

const TopNavBar = ({ children, onClick, cont, more, disabled, size }) => {
  return (
    <TopNavBarWarpper>
      {cont === 'text' && <h2>{children}</h2>}
      {cont === 'back' && (
        <Link to={-1}>
          <Img src={backIcon} width='22px' />
        </Link>
      )}
      {more ? (
        <button type='button' onClick={onClick}>
          <Img src={moreIcon} alt='검색' width='24px' />
        </button>
      ) : (
        <Button onClick={onClick} disabled={disabled} size={size}>
          {children}
        </Button>
      )}
    </TopNavBarWarpper>
  );
};

export default TopNavBar;
