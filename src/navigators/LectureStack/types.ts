import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type fadeEffectProp = { current: { progress: any } };

export type RootLectureStack = {
  MainList: undefined;
  LectureDetail: { lectureId: number };
  ReserveLecture: { lectureId: number };
  RequestPayment: undefined;
  DetailReservation: { reservationId: number; navigateToHome: () => void };
};
export type MainListProps = StackScreenProps<RootLectureStack, 'MainList'>;

export type LectureDetailProps = StackScreenProps<
  RootLectureStack,
  'LectureDetail'
>;

export type ReserveLectureProps = StackScreenProps<
  RootLectureStack,
  'ReserveLecture'
>;

export type RequestPaymentProps = StackScreenProps<
  RootLectureStack,
  'RequestPayment'
>;
