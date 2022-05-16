import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({ key: 'persist' });

export const colorModeAtom = atom({
  key: 'colorMode',
  default: 'light',
  effects_UNSTABLE: [persistAtom]
});

export const needsJsonAtom = atom({
  key: 'needsJson',
  default: undefined
});
