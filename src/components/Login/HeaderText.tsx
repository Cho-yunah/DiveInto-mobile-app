import React from 'react';
import { Text, View } from 'react-native';

import { headerTextStyle as styles } from './styles';

import * as getDimenstion from '@config/windowDimention';

export default function HeaderText() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>나만의 다이빙 일정을 관리해보세요.</Text>
      <Text style={styles.explanation}>
        회원 정보가 없을 시, 회원가입 단계로 넘어갑니다
      </Text>
    </View>
  );
}
