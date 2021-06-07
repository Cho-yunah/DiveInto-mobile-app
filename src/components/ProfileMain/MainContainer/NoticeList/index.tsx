import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';

export default function NoticeList() {
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
      <CommonBtn title="공지사항" moveNavigation={moveNavigaion1} />
      <CommonBtn title="자주 묻는 질문" moveNavigation={moveNavigaion2} />
      <CommonBtn title="약관 및 정책" moveNavigation={moveNavigaion3} />
    </View>
  );
}
