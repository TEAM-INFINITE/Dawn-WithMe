import TopNavBarWarpper from './styled';
import Img from '../../atoms/Img/Img';

const TopNavBar = ({ children, src }) => {
  return (
    <TopNavBarWarpper>
      <h2>{children}</h2>
      <Img src={src} alt='검색' width='24px' />
    </TopNavBarWarpper>
  );
};

export default TopNavBar;
