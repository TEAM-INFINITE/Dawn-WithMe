const fontSizes = {
  small: '10px',
  smallMid: '12px',
  base: '14px',
  xl: '16px',
  xxl: '18px',
  title: '24px',
};

const size = {
  mobile: '390px',
  mobileMid: '500px',
  tablet: '600px',
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  mobileMid: `@media only screen and (max-width: ${size.mobileMid})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
};

export const darkTheme = {
  MAIN: '#FEAC23',
  BACKGROUND: '#212025',
  TEXT: '#c4c4c4',
  SUB_TEXT: '#767676',
  LIGHT_TEXT: '#FFFFFF',
  BORDER: '#DBDBDB',
  MODAL_BACKGROUND: '#212025',
  MODAL_BORDER: '#C4C4C4',
  DISABLED: '#C4C4C4',
  WARNING: '#EB5757',

  fontSizes,
  device,
};

export const lightTheme = {
  MAIN: '#FEAC23',
  BACKGROUND: '#FFFFFF',
  TEXT: '#212025',
  SUB_TEXT: '#767676',
  LIGHT_TEXT: '#212025',
  BORDER: '#DBDBDB',
  MODAL_BACKGROUND: '#DBDBDB',
  MODAL_BORDER: '#C4C4C4',
  DISABLED: '#C4C4C4',
  WARNING: '#EB5757',

  fontSizes,
  device,
};

export const theme = {
  darkTheme,
  lightTheme,
};

export default theme;
