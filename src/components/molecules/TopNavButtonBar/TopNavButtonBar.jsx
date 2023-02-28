import { Link } from 'react-router-dom';
import TopNavButtonBarWarpper from './styled';
import Img from '../../atoms/Img/Img';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import Button from '../../atoms/Button/Button';

const TopNavButtonBar = ({
  children,
  onClick,
  disabled,
  size,
  width,
  form,
  type,
}) => {
  return (
    <TopNavButtonBarWarpper>
      <Link to={-1}>
        <Img src={backIcon} width='22px' alt='뒤로가기' />
      </Link>
      <Button
        onClick={onClick}
        disabled={disabled}
        size={size}
        width={width}
        form={form}
        type={type}
      >
        {children}
      </Button>
    </TopNavButtonBarWarpper>
  );
};

export default TopNavButtonBar;
