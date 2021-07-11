import { atom, selector } from 'recoil';
import { userInfoProps } from '../screens/ProfileMain/types';

export const userInfoAtom = atom<userInfoProps | null>({
  key: 'userInfoAtom',
  default: {
    email: '',
    nickname: '',
    phone: '',
  },
});

export const atkState = atom<string | null>({
  key: 'atk',
  default: null,
});

// export const groupState = atom<string>({
//   key: 'group',
//   default: '',
// });
