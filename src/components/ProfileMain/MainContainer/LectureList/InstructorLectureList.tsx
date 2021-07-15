import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';
import { useNavigation } from '@react-navigation/native';

export default function InstructorLectureList() {
  const navigation = useNavigation();

  const moveNavigaion1 = () => {
    console.log('move1');
  };

  const moveNavFindAllReview = () => {
    navigation.navigate('FindAllReview');
  };

  const moveNavigaion3 = () => {
    console.log('move3');
  };

  const moveNavLectureSchedule = () => {
    navigation.navigate('LectureSchedule');
  };

  const moveNaviLikeCollection = () => {
    navigation.navigate('LikeCollection');
  };

  return (
    <View style={styles.container}>
      <CommonBtn title="강의 추가 / 관리" moveNavigation={moveNavigaion1} />
      <CommonBtn title="후기 모아보기" moveNavigation={moveNavFindAllReview} />
      <CommonBtn title="정산 관리" moveNavigation={moveNavigaion3} />
      <CommonBtn title="수강내역" moveNavigation={moveNavLectureSchedule} />
      <CommonBtn title="종아요목록" moveNavigation={moveNaviLikeCollection} />
    </View>
  );
}
