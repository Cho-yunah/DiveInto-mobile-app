import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type fadeEffectProp = { current: { progress: any } };

export type RootLectureStack = {
  MainList: undefined;
  LectureDetail: { lectureId: number };
  ReserveLecture: { lectureId: number };
  RequestPayment: undefined;
  '강의 키워드 검색': undefined;
  '강의 필터 검색': undefined;
  '새로운 강의 더보기': undefined;
  '인기 강의 더보기': undefined;
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

export type KeywordSearchProps = StackScreenProps<
  RootLectureStack,
  '강의 키워드 검색'
>;

export type FilterSearchProps = StackScreenProps<
  RootLectureStack,
  '강의 필터 검색'
>;

export type NewLectureMoreProps = StackScreenProps<
  RootLectureStack,
  '새로운 강의 더보기'
>;

export type PopularLectureMoreProps = StackScreenProps<
  RootLectureStack,
  '인기 강의 더보기'
>;
