import { atom, selector, selectorFamily } from 'recoil';
import instance from '../lib/api/axios';
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

export const LectureListState = atom({
  key: 'LectureList',
  default: [],
});
