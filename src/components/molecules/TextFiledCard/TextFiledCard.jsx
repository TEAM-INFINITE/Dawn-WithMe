import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import TextLabel from '../../atoms/Label/TextLabel/TextLabel';
import TextFiledCardWrapper from './styled';

const TextFiledCard = ({
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
    <TextFiledCardWrapper>
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
    </TextFiledCardWrapper>
  );
};

export default TextFiledCard;
