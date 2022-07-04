import { atom } from 'recoil';
import { be_server } from './constants';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({ key: 'persist' });

// persistent atoms
export const colorModeAtom = atom({
  key: 'colorMode',
  default: 'light',
  effects_UNSTABLE: [persistAtom]
});

export const remoteBaseUrlAtom = atom({
  key: 'remoteBaseUrl',
  default: be_server,
  effects_UNSTABLE: [persistAtom]
});

// non-persistent atoms
export const needsJsonAtom = atom({
  key: 'needsJson',
  default: undefined
});

export const isRemoteAtom = atom({
  key: 'isRemote',
  default: false
});
