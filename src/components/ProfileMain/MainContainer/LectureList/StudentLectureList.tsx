import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';
import { useNavigation } from '@react-navigation/native';

export default function StudentLectureList() {
  const navigation = useNavigation();

  const moveNavLectureSchedule = () => {
    navigation.navigate('LectureSchedule');
  };

  const moveNavLikeCollection = () => {
    navigation.navigate('LikeCollection');
  };

  const moveNavApplyLecturer = () => {
    navigation.navigate('ApplyLecturer');
  };

  const moveNavTotalAteendeeReview = () => {
    navigation.navigate('TotalAttendeeReview');
  };

  return (
    <View style={styles.container}>
      <CommonBtn title="리뷰관리" moveNavigation={moveNavTotalAteendeeReview} />
      <CommonBtn title="수강내역" moveNavigation={moveNavLectureSchedule} />
      <CommonBtn title="종아요목록" moveNavigation={moveNavLikeCollection} />
      <CommonBtn title="강사신청" moveNavigation={moveNavApplyLecturer} />
    </View>
  );
}
