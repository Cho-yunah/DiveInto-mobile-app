import { StackScreenProps } from '@react-navigation/stack';

export type RootAttendeeScheduleStack = {
  DetailReservation: {
    reservationId: number;
    navigateToHome?: () => void;
  };
  WriteReview: {
    reservationId: number;
  };
};

// 예약 상세 타입
export type DetailReservationProps = StackScreenProps<
  RootAttendeeScheduleStack,
  'DetailReservation'
>;

export type WriteReviewScreenProps = StackScreenProps<
  RootAttendeeScheduleStack,
  'WriteReview'
>;
