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

export const authOpenAtom = atom({
  key: 'authOpen',
  default: false
});

export const isRemoteAtom = atom({
  key: 'isRemote',
  default: false
});

export const showErrorMessageAtom = atom({
  key: 'showErrorMessage',
  default: null
});
