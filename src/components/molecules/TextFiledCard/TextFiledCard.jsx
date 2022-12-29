import TextFiled from '../../atoms/Input/TextFiled/TextFiled';
import TextLabel from '../../atoms/Label/TextLabel.jsx/TextLabel.jsx';
import TextFiledCardWrapper from './styled';

const TextFiledCard = ({
  children,
  type,
  onChange,
  onBlur,
  value,
  placeholder,
  id,
  name,
  refValue,
  autoFocus,
  min,
  max,
}) => {
  return (
    <TextFiledCardWrapper>
      <TextLabel htmlFor={id}>{children}</TextLabel>
      <TextFiled
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        ref={refValue}
        autoFocus={autoFocus}
        min={min}
        max={max}
      />
    </TextFiledCardWrapper>
  );
};

export default TextFiledCard;
