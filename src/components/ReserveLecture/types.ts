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
};

export type EachEquipInfo = {
  id: number;
  size: string;
  quantity: number;
};

export type DateTimeInfoType = {
  scheduleDateTimeId: number;
  startTime: string;
  endTime: string;
  date: string;
};
export type ScheduleInfoType = {
  scheduleId: number;
  currentNumber: number;
  maxNumber: number;
  dateTimeInfos: DateTimeInfoType[];
};

export type MarkedDateType = {
  selectedColor: string;
  selected: boolean;
  currentNumber: number;
  maxNumber: number;
  scheduleId: number[];
  scheduleDateTimeId: number;
  startTime: string;
  endTime: string;
  date: string;
};

export type MarkedDatesType = {
  [key: string]: MarkedDateType;
};
