import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';

export default function Output() {
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
      <CommonBtn title="로그아웃" moveNavigation={moveNavigaion1} />
      <CommonBtn title="회원탈퇴" moveNavigation={moveNavigaion2} />
    </View>
  );
}
