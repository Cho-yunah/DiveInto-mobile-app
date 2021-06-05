import React from 'react';
import { Text, View } from 'react-native';
import { LectureInfoStyles as styles } from './styles';

const LectureInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.lectureTitle}>프리 다이빙(강의 제목)</Text>
        <View style={styles.lectureTagContainer}>
          <Text style={styles.lectureTag}>#AIDA</Text>
          <Text style={styles.lectureTag}>#Lv1</Text>
        </View>
        <View style={styles.lecturePriceContainer}>
          <Text style={styles.lecturePrice}>120,000</Text>
          <Text style={styles.lecturePriceUnit}>원</Text>
        </View>
      </View>
      <View style={styles.bottomInfo}>
        <Text style={styles.bottomInfoText}>
          강의 소개가 들어가는 곳입니다. 이 강의는 매우 어렵습니다. 절대 집에서
          따라하지마세요. 위험합니다.
        </Text>
      </View>
    </View>
  );
};

export default LectureInfo;
