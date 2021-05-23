import React from 'react';
import { View } from 'react-native';
import {
  HeaderText,
  LoginProblem,
  SocialLogin,
  EmailInput,
} from '@components/Login';

import { LoginProps } from '@navigators/LoginStack/types';
import styles from './styles';

const LoginScreen = ({ navigation }: LoginProps) => {
  const onLoginPress = () => {
    const isExist = false;
    isExist
      ? navigation.navigate('LoginWithEmail')
      : navigation.navigate('SetPassword');
  };

  return (
    <View style={styles.container}>
      <HeaderText />
      <EmailInput onLoginPress={onLoginPress} />
      <SocialLogin />
      <LoginProblem />
    </View>
  );
};

export default LoginScreen;
