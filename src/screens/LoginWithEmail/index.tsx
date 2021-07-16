import React from 'react';
import { Modal, Pressable, ScrollView, View } from 'react-native';
import { LoginWithEmailProps } from '@navigators/LoginStack/types';
import { PwForgot, LoginButton, PWInput } from '@components/LoginWithEmail';
import styles from './styles';
import instance from '@/src/lib/api/axios';
import { LoginButtonProps } from '@/src/components/LoginWithEmail/types';

import { useSetRecoilState } from 'recoil';
import { IsLogin, IsInstructor } from '@/src/recoil/Global';

import jwt_decode from 'jwt-decode';
import { JWToken } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { ModalContainer } from '../ReserveLecture';

const LoginWithEmailScreen = ({ navigation }: LoginWithEmailProps) => {
  const setIsLogin = useSetRecoilState(IsLogin);
  const setIsInstructor = useSetRecoilState(IsInstructor);
  const [isError, setIsError] = useState<boolean>(false);

  const requestLogin: LoginButtonProps['requestLogin'] = async (
    email,
    password,
    setIsLoading,
  ) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const login = await instance.post('/sign/login', {
        email,
        password,
      });
      if (login?.data?.access_token) {
        const atk = login.data.access_token;
        const decoded: JWToken = jwt_decode(atk);

        await AsyncStorage.setItem('atk', atk);

        console.log('atk : ', atk);

        await AsyncStorage.setItem('token', atk);
        setIsLogin(true);

        if (decoded.authorities.includes('ROLE_INSTRUCTOR'))
          setIsInstructor(true);
      }
    } catch (e) {
      console.log(e.response.data);
      setIsError(true);
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
      <Modal visible={isError} transparent={true} animationType={'fade'}>
        <Pressable
          onPress={() => setIsError(false)}
          style={styles.modalOuterContainer}
        >
          <ModalContainer message={'이메일 혹은 비밀번호가 잘못되었습니다.'} />
        </Pressable>
      </Modal>
    </View>
  );
};
export default LoginWithEmailScreen;
