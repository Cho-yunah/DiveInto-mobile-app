import React from 'react';
import pushCorrectStar from '@/src/lib/utils/pushCorrectStar';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { ReviewListStyles as RS } from './styles';

const OpenStars = ({
  rate,
  ratingName,
  layoutCenter,
}: {
  rate: number;
  ratingName: string;
  layoutCenter?: boolean;
}) => {
  const stars = pushCorrectStar(
    rate,
    <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />,
    <FontAwesome name="star-half" size={16} color={'rgb(248,194,93)'} />,
  );

  if (layoutCenter) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={RS.openStarText}>{ratingName}</Text>
        <View style={RS.openStars}>{stars.map(star => star)}</View>
      </View>
    );
  }

  return (
    <View>
      <Text style={RS.openStarText}>{ratingName}</Text>
      <View style={RS.openStars}>{stars.map(star => star)}</View>
    </View>
  );
};

export default OpenStars;
