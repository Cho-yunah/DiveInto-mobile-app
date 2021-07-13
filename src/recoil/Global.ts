import { atom } from 'recoil';

export const IsLogin = atom({
  key: 'IsLogin',
  default: true,
});

export const IsInstructor = atom({
  key: 'IsInstructor',
  default: false,
});
