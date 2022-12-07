const fontSizes = {
  small: '10px',
  smallMid: '12px',
  base: '14px',
  xl: '16px',
  xxl: '18px',
};

const colors = {
  colorMain: '#FEAC23',
  colorBg: '#212025',
  colorText: 'FFFFFF',
  colorC4: 'c4c4c4',
  colorDB: 'dbdbdb',
  color76: '767676',
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
  // tablet: '768px',
  // desktop: '1440px',
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  // tablet: `@media only screen and (max-width: ${size.tablet})`,
  // desktopL: `@media only screen and (max-width: ${size.desktop})`,
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
