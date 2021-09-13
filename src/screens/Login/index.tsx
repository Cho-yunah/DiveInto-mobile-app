import React from 'react';
import { ScrollView, View } from 'react-native';
import { HeaderText, EmailInput } from '@components/Login';

import { LoginProps } from '@navigators/LoginStack/types';
import styles from './styles';
import instance from '@api/axios';

const LoginScreen = ({ navigation }: LoginProps) => {
  const requestCheckEmail = async (
    email: string,
    setIsLoading: (bool: boolean) => void,
  ) => {
    setIsLoading(true);
    try {
      const checkEmail = await instance.post('/sign/check/email', {
        email,
      });
      console.log(checkEmail.data);
      if (checkEmail.data.existed) navigation.navigate('LoginWithEmail');
      else navigation.navigate('AuthEamil');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderText />
        <EmailInput requestCheckEmail={requestCheckEmail} />
        {/* <SocialLogin /> */}
        {/* <LoginProblem /> */}
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
