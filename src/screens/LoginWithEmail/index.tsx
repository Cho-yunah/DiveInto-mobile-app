import React from 'react';
import { ScrollView, View } from 'react-native';
import { LoginWithEmailProps } from '@navigators/LoginStack/types';
import { PwForgot, LoginButton, PWInput } from '@components/LoginWithEmail';
import styles from './styles';
import instance from '@/src/lib/api/axios';
import { LoginButtonProps } from '@/src/components/LoginWithEmail/types';

import { useSetRecoilState } from 'recoil';
import { IsLogin, IsInstructor } from '@/src/recoil/Global';

import jwt_decode from 'jwt-decode';
import { JWToken } from './types';

const LoginWithEmailScreen = ({ navigation }: LoginWithEmailProps) => {
  const setIsLogin = useSetRecoilState(IsLogin);
  const setIsInstructor = useSetRecoilState(IsInstructor);

  const requestLogin: LoginButtonProps['requestLogin'] = async (
    email,
    password,
    setIsLoading,
  ) => {
    setIsLoading(true);

    try {
      const login = await instance.post('/sign/login', {
        email,
        password,
      });
      if (login?.data?.access_token) {
        const atk = login.data.access_token;
        const decoded: JWToken = jwt_decode(atk);
        console.log('atk : ', atk);

        if (decoded.authorities.includes('ROLE_INSTRUCTOR'))
          setIsInstructor(true);
        setIsLogin(true);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <PWInput />
        <LoginButton requestLogin={requestLogin} />
        <PwForgot />
      </ScrollView>
    </View>
  );
};
export default LoginWithEmailScreen;
