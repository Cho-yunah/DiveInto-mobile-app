import React from 'react';
import { Text, View } from 'react-native';

import { HeaderText as styles } from './styles';

export default function HeaderText() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>안녕하세요</Text>
        <Text style={styles.title}>이메일 인증이 필요합니다!</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.desc}>
          회원 정보가 없어, 이메일 인증이 필요합니다. 이메일이 발송된 주소는
          아래와 같습니다.
        </Text>
      </View>
    </>
  );
}
