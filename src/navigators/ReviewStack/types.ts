import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type ReviewStack = {
  WriteReview: { reservationId: number };
  // WriteReview: undefined;
};

export type WriteReviewScreenProps = StackScreenProps<
  ReviewStack,
  'WriteReview'
>;
