import useTheme from '../../../hooks/useTheme';
import Button from '../../atoms/Button/Button';
import ModeToggleWrapper from './styled';

const ModeToggleBtn = () => {
  const handleThemeChange = useTheme();
  return (
    <ModeToggleWrapper>
      <Button onClick={handleThemeChange}>LIGHT</Button>
    </ModeToggleWrapper>
  );
};

export default ModeToggleBtn;
