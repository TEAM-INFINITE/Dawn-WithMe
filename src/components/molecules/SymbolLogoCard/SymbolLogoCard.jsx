import Img from '../../atoms/Img/Img';
import SymbolLogoCardWrapper from './styled';
import titleLogo from '../../../assets/images/title-logo.png';

const SymbolLogoCard = ({ src }) => {
  return (
    <SymbolLogoCardWrapper>
      <Img className='owl' src={src} width='200px' alt='캐릭터' />
      <Img className='logo' src={titleLogo} width='140px' alt='타이틀 로고' />
    </SymbolLogoCardWrapper>
  );
};

export default SymbolLogoCard;
