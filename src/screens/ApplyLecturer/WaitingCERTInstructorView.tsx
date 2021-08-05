import React from 'react';
import { View, Text } from 'react-native';
import { CERTInstructorStyle as styles } from './styles';

export default function WaitingCERTInstructorView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>신청이 완료되었습니다.</Text>
      <Text style={styles.desc}>
        2 ~ 3일 정도의 기간이 걸리니 조금만 기다려주세요.
      </Text>
    </View>
  );
}
