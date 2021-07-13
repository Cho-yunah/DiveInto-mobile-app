import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import {
  LectureImg,
  TouchSwipe,
  LectureContents,
} from '@components/LectureSchedule';
export default function LastLectureScreen() {
  return (
    <View style={styles.eachScreenContainerStyle}>
      <TouchSwipe
        imgComponent={<LectureImg />}
        contentsComponents={<LectureContents />}
      ></TouchSwipe>
    </View>
  );
}
