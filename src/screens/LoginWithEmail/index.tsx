import React from 'react';
import { ScrollView, View } from 'react-native';
import { LoginWithEmailProps } from '@navigators/LoginStack/types';
import { PwForgot, LoginButton, PWInput } from '@components/LoginWithEmail';
import styles from './styles';

const LoginWithEmailScreen = ({ navigation }: LoginWithEmailProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PWInput />
        <LoginButton />
        <PwForgot />
      </ScrollView>
    </View>
  );
};
export default LoginWithEmailScreen;
