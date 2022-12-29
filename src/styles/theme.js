const fontSizes = {
  small: '10px',
  smallMid: '12px',
  base: '14px',
  xl: '16px',
  xxl: '18px',
  title: '24px',
};

const colors = {
  colorMain: '#FEAC23',
  colorBg: '#212025',
  colorNavBg: '#2F3136',
  colorWhite: '#FFFFFF',
  colorBorder: '#c4c4c4',
  colorDB: '#dbdbdb',
  color76: '#767676',
  colorWarning: '#EB5757',
};

// const lightColors = {
//   colorMain: '#FEAC23',
//   colorBg: '#212025',
//   colorText: 'FFFFFF',
//   colorC4: 'c4c4c4',
//   colorDB: 'dbdbdb',
//   color76: '767676',
// };

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

const darkTheme = {
  colors,
  fontSizes,
  device,
};

// export const lightTheme = {
//   colors,
//   fontSizes,
//   device,
// };

export default darkTheme;
