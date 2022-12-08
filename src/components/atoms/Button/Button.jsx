import ButtonWrapper from './styled';

const Button = ({ children, width, size, disabled, className }) => {
  return (
    <ButtonWrapper
      width={width}
      size={size}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
