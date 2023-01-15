import { atom } from 'recoil';

export const modalAtom = atom({
  key: 'modal',
  default: {
    id: '',
    isActive: { header: false, post: false, comment: false },
    modalListText: [
      { id: 1, text: '삭제' },
      { id: 2, text: '수정' },
    ],
  },
});

export const alertAtom = atom({
  key: 'alert',
  default: {
    text: { alertText: '', text: '' },
    isActive: { header: false, post: false, comment: false },
  },
});

export const isErrorAtom = atom({
  key: 'error',
  default: false,
});
