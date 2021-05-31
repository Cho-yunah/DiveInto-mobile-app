import { StackNavigationProp } from '@react-navigation/stack';

export type ReviewStack = {
  WriteReview: undefined;
};

export type WriteReviewProps = {
  navigation: StackNavigationProp<ReviewStack, 'WriteReview'>;
};
