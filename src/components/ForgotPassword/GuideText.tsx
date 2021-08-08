import React from 'react';
import { Text, View } from 'react-native';
import { GuideTextStyle as styles } from './styles';

const GuideText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.BigText}>
        새 비밀번호를 위한 이메일 인증이 필요합니다.
      </Text>
      <Text style={styles.midText}>
        아래의 이메일 주소로 인증번호가 발송됩니다.
      </Text>
    </View>
  );
};

export default GuideText;
