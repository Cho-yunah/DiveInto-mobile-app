import { atom, selector } from 'recoil';
import moment from 'moment';

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

export const emailState = atom({
  key: 'email',
  default: '',
});

export const verifyCodeState = atom({
  key: 'verifyCode',
  default: '',
});

export const isCertification = atom({
  key: 'isCertification',
  default: false,
});

export const isCertificationError = atom({
  key: 'isCertificationError',
  default: false,
});

export const phoneNumber = atom({
  key: 'phoneNumber',
  default: '',
});

export const nicknameState = atom({
  key: 'nickname',
  default: '',
});

export const genderState = atom({
  key: 'gender',
  default: 'MALE',
});

export const birthState = atom<Date | null>({
  key: 'birth',
  default: null,
});

export const createUserSelector = selector({
  key: 'sign/sign-up',
  get: ({ get }) => {
    const userInfo = {
      email: get(emailState),
      password: get(password),
      nickName: get(nicknameState),
      birth: moment(get(birthState)).format('YYYY-MM-DD'),
      gender: get(genderState),
      phoneNumber: get(phoneNumber),
      verifyCode: get(verifyCodeState),
    };

    return userInfo;
  },
});

export const passwordLoginState = atom({
  key: 'passwordLogin',
  default: '',
});

export const isCheckedSaveEmailState = atom({
  key: 'isCheckedSaveEmail',
  default: false,
});
