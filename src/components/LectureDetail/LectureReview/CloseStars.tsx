import { PersonalReviewItem } from './types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ReviewListStyles as RS } from './styles';
import React from 'react';
import pushCorrectStar from '@/src/lib/utils/pushCorrectStar';
import { View } from 'react-native';

const CloseStars = ({
  avgRate,
}: {
  avgRate: PersonalReviewItem['avgRate'];
}) => {
  const stars = pushCorrectStar(
    avgRate,
    <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />,
    <FontAwesome name="star-half" size={16} color={'rgb(248,194,93)'} />,
  );

  return <View style={RS.closeStars}>{stars.map(star => star)}</View>;
};

export default CloseStars;
