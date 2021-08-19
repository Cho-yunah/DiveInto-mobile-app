import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CommonStyles as styles } from './styles';
import { CommonListProps } from './types';

export default function LastLectureSchedule({
  imgComponent,
  contentsComponents,
  reservationId,
}: CommonListProps) {
  const navigation = useNavigation();

  const onMoveWriteReiveView = () => {
    navigation.navigate('WriteReview', { reservationId });
  };

  return (
    <TouchableOpacity
      style={[styles.listContainer, styles.lastLectureContainer]}
      onPress={onMoveWriteReiveView}
    >
      {imgComponent}
      {contentsComponents}
    </TouchableOpacity>
  );
}
