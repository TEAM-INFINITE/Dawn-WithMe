import { useRecoilState } from 'recoil';
import Img from '../../atoms/Img/Img';
import LoadingIcon from '../../../assets/images/loading-spinners.gif';
import LightLoadingIcon from '../../../assets/images/loading-spinners-light.gif';
import LoadingSpinnerWrapper from './styled';
import themeState from '../../../recoil/theme';

const LoadingSpinner = () => {
  const [themeMode, setThemeMode] = useRecoilState(themeState);
  return (
    <LoadingSpinnerWrapper>
      {themeMode === 'light' ? (
        <Img src={LightLoadingIcon} />
      ) : (
        <Img src={LoadingIcon} />
      )}
    </LoadingSpinnerWrapper>
  );
};

export default LoadingSpinner;
