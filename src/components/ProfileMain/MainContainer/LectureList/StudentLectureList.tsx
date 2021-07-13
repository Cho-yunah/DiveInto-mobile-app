import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';
import { useNavigation } from '@react-navigation/native';

export default function StudentLectureList() {
  const navigation = useNavigation();

  const moveNavigaion1 = () => {
    console.log('move1');
  };

  const moveNavLikeCollection = () => {
    navigation.navigate('LikeCollection');
  };

  const moveNavApplyLecturer = () => {
    navigation.navigate('ApplyLecturer');
  };

  return (
    <View style={styles.container}>
      <CommonBtn title="수강내역" moveNavigation={moveNavigaion1} />
      <CommonBtn title="종아요목록" moveNavigation={moveNavLikeCollection} />
      <CommonBtn title="강사신청" moveNavigation={moveNavApplyLecturer} />
    </View>
  );
}
