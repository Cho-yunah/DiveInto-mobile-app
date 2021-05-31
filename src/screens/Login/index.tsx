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
  return (
    <View style={styles.container}>
      <HeaderText />
      <EmailInput />
      <SocialLogin />
      <LoginProblem />
    </View>
  );
};

export default LoginScreen;
