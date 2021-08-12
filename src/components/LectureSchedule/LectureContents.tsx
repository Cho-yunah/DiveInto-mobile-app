import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { nextLectureContentsStyle, lastLectureContentsStyle } from './styles';
import { LectureContentsProps } from './types';

export default function LectureContents({
  title,
  level,
  group,
  reservationDate,
  nickname,
  lectureType,
}: LectureContentsProps) {
  const styles =
    lectureType === 'next'
      ? nextLectureContentsStyle
      : lastLectureContentsStyle;

  return (
    <View style={styles.container}>
      <View style={styles.commonLayout}>
        <Text style={styles.smallTextStyle}>{nickname}</Text>
      </View>
      <View style={styles.commonLayout}>
        <Text style={styles.largeTextStyle}>{title}</Text>
      </View>
      <View style={styles.commonLayout}>
        <Text style={styles.mediumTextStyle}>{group}</Text>
        <Text style={styles.mediumTextStyle}>{level}</Text>
      </View>
      <View style={styles.commonLayout}>
        <Text style={styles.mediumTextStyle}>{reservationDate} 예약</Text>
      </View>
    </View>
  );
}
