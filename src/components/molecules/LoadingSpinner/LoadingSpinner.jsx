import Img from '../../atoms/Img/Img';
import LoadingIcon from '../../../assets/images/loading-spinners.gif';
import LoadingSpinnerWrapper from './styled';

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerWrapper>
      <Img src={LoadingIcon} />
    </LoadingSpinnerWrapper>
  );
};

export default LoadingSpinner;
