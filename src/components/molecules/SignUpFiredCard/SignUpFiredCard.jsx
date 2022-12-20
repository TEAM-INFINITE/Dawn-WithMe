import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import TextLabel from '../../atoms/Label/TextLabel/TextLabel';
import SignFiledCardWrapper from './styled';

const SignUpFiredCard = ({
  children,
  type,
  onChange,
  value,
  placeholder,
  id,
  name,
  refValue,
  autoFocus,
}) => {
  return (
    <SignFiledCardWrapper>
      <TextLabel htmlFor={id}>{children}</TextLabel>
      <TextFiled
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        ref={refValue}
        autoFocus={autoFocus}
      />
    </SignFiledCardWrapper>
  );
};

export default SignUpFiredCard;
