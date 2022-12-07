import ButtonWrapper from './styled';

const Button = ({ children, width, size }) => {
  return (
    <ButtonWrapper width={width} size={size}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
