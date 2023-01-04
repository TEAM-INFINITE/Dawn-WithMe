import { atom } from 'recoil';

export const modalAtom = atom({
  key: 'modal',
  default: '',
});

export const isModalAtom = atom({
  key: 'isModal',
  default: false,
});

export const isAlertAtom = atom({
  key: 'isAlert',
  default: false,
});
