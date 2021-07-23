export type SelectedDayType = {
  year: number;
  month: number;
  day: number;
  timestamp: Date;
  dateString: string;
};

export type SizeModalProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export type ReserveBtnProps = {
  navigateToRequestPayment: () => void;
  isDisabled: boolean;
  setIsDisabled: (isDisabled: boolean) => void;
  setModalMessage: (modalMessage: string) => void;
};

export type EachEquipInfo = {
  id: number;
  size: string;
  quantity: number;
};
