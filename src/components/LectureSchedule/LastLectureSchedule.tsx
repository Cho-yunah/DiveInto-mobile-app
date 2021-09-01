import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CommonStyles as styles } from './styles';
import { CommonListProps } from './types';
import { shadow } from '../MainList/styles';

export default function LastLectureSchedule({
  imgComponent,
  contentsComponents,
  reservationId,
}: CommonListProps) {
  const navigation = useNavigation();

  const onMoveLectureDetailView = () => {
    navigation.navigate('DetailReservation', { reservationId });
  };

  return (
    <TouchableOpacity
      style={[styles.lastListContainer]}
      onPress={onMoveLectureDetailView}
    >
      {imgComponent}
      {contentsComponents}
    </TouchableOpacity>
  );
}
