import { atom } from 'recoil';

export type IsValid = undefined | boolean;

export const isEmailValid = atom<IsValid>({
  key: 'isEmailValid',
  default: undefined,
});

export const isPWValid = atom<IsValid>({
  key: 'isPWValid',
  default: undefined,
});

export const password = atom({
  key: 'password',
  default: '',
});

export const rePassword = atom({
  key: 'rePassword',
  default: '',
});

export const phoneNumber = atom({
  key: 'phoneNumber',
  default: '',
});

export const emailState = atom({
  key: 'email',
  default: '',
});

export const passwordLoginState = atom({
  key: 'passwordLogin',
  default: '',
});
