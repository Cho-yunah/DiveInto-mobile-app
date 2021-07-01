export type CommonModalProps = {
  show: boolean;
  mode?: string;
  desc: string;
  toggleShowModal: () => void;
  onClickConfirm?: () => void;
};
