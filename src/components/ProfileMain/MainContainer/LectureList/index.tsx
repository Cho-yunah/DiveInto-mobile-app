import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';

export default function LectureList() {
  const moveNavigaion1 = () => {
    console.log('move1');
  };

  const moveNavigaion2 = () => {
    console.log('move2');
  };

  const moveNavigaion3 = () => {
    console.log('move3');
  };

  return (
    <View style={styles.container}>
      <CommonBtn title="수강내역" moveNavigation={moveNavigaion1} />
      <CommonBtn title="종아요목록" moveNavigation={moveNavigaion2} />
      <CommonBtn title="강사신청" moveNavigation={moveNavigaion3} />
    </View>
  );
}
