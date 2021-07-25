export type userInfoPorps = {
  phone: string;
  email: string;
  nickname: string;
  type: 'student' | 'instructor';
};

export type EtcUserInfoProps = { nickname: string; email: string };
export type PhoneNuberInfoProps = { phone: string };
export type CommonBtnProps = { title: string; moveNavigation: () => void };
