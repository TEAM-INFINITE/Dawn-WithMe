import Img from '../../atoms/Img/Img';
import SymbolLogoCardWrapper from './styled';
import grayFullLogo from '../../../assets/images/gray-full-logo.png';
import titleLogo from '../../../assets/images/title-logo.png';

const SymbolLogoCard = () => {
  return (
    <SymbolLogoCardWrapper>
      <Img className='grayowl' src={grayFullLogo} width='200px' alt='로딩중' />
      <Img className='logo' src={titleLogo} width='200px' alt='타이틀 로고' />
    </SymbolLogoCardWrapper>
  );
};

export default SymbolLogoCard;