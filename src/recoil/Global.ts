import { atom, atomFamily } from 'recoil';

export const IsLogin = atom({
  key: 'IsLogin',
  default: false,
});

export const IsInstructor = atom({
  key: 'IsInstructor',
  default: false,
});

export const liekCollectionRefreshState = atomFamily({
  key: 'communityRefresh',
  default: 0,
});
