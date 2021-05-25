export type gender = '남성' | '여성';

export type selectTabProps = {
  selected: gender;
  gender: gender;
  onPress?: (gender: gender) => void;
};

export type DatePickerModalProps = {
  show: boolean;
  onOutPress: () => void;
  onComplete: () => void;
  date: Date | null;
  onDateChange: (date: Date) => void;
};
