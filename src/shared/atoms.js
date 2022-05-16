import { atom } from 'recoil';

export const colorModeAtom = atom({
  key: 'colorMode',
  default: 'light'
});

export const needsJsonAtom = atom({
  key: 'needsJson',
  default: undefined
});
