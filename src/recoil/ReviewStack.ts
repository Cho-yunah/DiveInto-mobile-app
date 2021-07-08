import { atom, atomFamily } from 'recoil';

export type PicsArrStateType = {
  size: number;
  uri: string;
  type: string;
  name: string;
};

export const ratingStarState = atomFamily<number, string>({
  key: 'ratingStar',
  default: 0,
});

export const contentState = atom<string>({
  key: 'content',
  default: '',
});

export const picsArrState = atom<PicsArrStateType[]>({
  key: 'picsArr',
  default: [],
});
