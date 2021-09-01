import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
  isExistedReview,
  reservationId,
}: LectureContentsProps) {
  const navigation = useNavigation();

  const styles =
    lectureType === 'next'
      ? nextLectureContentsStyle
      : lastLectureContentsStyle;

  const onMoveWriteReiveView = () => {
    navigation.navigate('WriteReview', { reservationId });
  };

  console.log(isExistedReview, 'isExistedReview');

  return (
    <View style={styles.container}>
      {isExistedReview !== null && !isExistedReview && (
        <TouchableOpacity
          onPress={onMoveWriteReiveView}
          style={lastLectureContentsStyle.moveWriteBtn}
        >
          <Text style={lastLectureContentsStyle.btnText}>리뷰작성</Text>
        </TouchableOpacity>
      )}

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
