import React from 'react';
import { Text, View } from 'react-native';

import { etcUserInfo as styles } from './styles';
import { EtcUserInfoProps } from '../types';

export default function EtcUserInfo({ nickname, email }: EtcUserInfoProps) {
  const autoMasking = () => email.replace(/^(.{3})[^@]+/, '$1***');

  return (
    <View style={styles.container}>
      <Text style={styles.nicknameText}>{nickname}님</Text>
      <Text style={styles.emailText}>{autoMasking()}</Text>
    </View>
  );
}
