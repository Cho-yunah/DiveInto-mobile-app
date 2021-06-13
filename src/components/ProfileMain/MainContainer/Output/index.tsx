import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';
import ShowOutputModal from './ShowOutputModal';

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
      <ShowOutputModal title="로그아웃" desc="로그아웃 하시겠습니까?" />
      <ShowOutputModal title="회원탈퇴" desc="회원탈퇴 하시겠습니까?" />
    </View>
  );
}
