export type EtcUserInfoProps = { nickname: string; email: string };
export type PhoneNuberInfoProps = { phone: string };
export type CommonBtnProps = { title: string; moveNavigation: () => void };

export type CommonModalProps = {
  show: boolean;
  mode?: string;
  desc: string;
  toggleShowModal: () => void;
  onClickConfirm?: () => void;
};
