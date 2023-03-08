import { atom } from 'recoil';

const themeState = atom({
  key: 'themeState',
  default: 'dark',
});

export default themeState;
