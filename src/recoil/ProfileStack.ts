import { atom, selector } from 'recoil';
import { userInfoProps } from '../screens/ProfileMain/types';

// export const userInfoAtom = atom<userInfoProps | null>({
//   key: 'userInfoAtom',
//   default: {
//     email: '',
//     nickname: '',
//     phone: '',
//   },
// });

export const phoneState = atom({
  key: 'phone',
  default: '',
});
