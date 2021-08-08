import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { LoginWithEmailProps } from '@navigators/LoginStack/types';
import { PwForgot, LoginButton, PWInput } from '@components/LoginWithEmail';
import styles from './styles';
import instance, { getInstanceATK } from '@/src/lib/api/axios';
import { LoginButtonProps } from '@/src/components/LoginWithEmail/types';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { IsLogin, IsInstructor } from '@/src/recoil/Global';

import jwt_decode from 'jwt-decode';
import { JWToken } from './types';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as FCM from '@lib/firebase/FCM';
import { emailState, isCheckedSaveEmailState } from '@/src/recoil/LoginStack';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginWithEmailScreen = ({ navigation }: LoginWithEmailProps) => {
  const setIsLogin = useSetRecoilState(IsLogin);
  const setIsInstructor = useSetRecoilState(IsInstructor);
  const [isError, setIsError] = useState<boolean>(false);
  const [toggleCheckBox, setToggleCheckBox] = useRecoilState(
    isCheckedSaveEmailState,
  ); // true 이면 로그인시 asyncStorage에 이메일 저장.
  const email = useRecoilValue(emailState);

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
        axios.defaults.headers.common.Authorization = atk;
        const decoded: JWToken = jwt_decode(atk);
        await AsyncStorage.setItem('atk', atk);
        const fcmToken = await FCM.getToken();

        console.log('fcm Token : ', fcmToken);
        console.log(await AsyncStorage.getItem('atk'));

        if (decoded.authorities.includes('ROLE_INSTRUCTOR')) {
          setIsInstructor(true);
          await AsyncStorage.setItem('instructor', 'instructor');
        } else {
          await AsyncStorage.setItem('instructor', 'student');
        }
        await requestFireBase(fcmToken);
        setIsLogin(true);

        if (toggleCheckBox) await AsyncStorage.setItem('savedEmail', email);
        else await AsyncStorage.removeItem('savedEmail');
      }
    } catch (e) {
      console.log(e.response.data);
      setIsError(true);
    }
    setIsLoading(false);
  };

  const navigateToForgotPassword = () => navigation.navigate('ForgotPassword');

  return (
    <View style={styles.container}>
      <ScrollView>
        <PWInput />
        <LoginButton requestLogin={requestLogin} />
        <PwForgot navigateToForgotPassword={navigateToForgotPassword} />
      </ScrollView>
      <Modal visible={isError} transparent={true} animationType={'fade'}>
        <Pressable
          onPress={() => setIsError(false)}
          style={styles.modalOuterContainer}
        >
          <SafeAreaView style={styles.modalContainer}>
            <Text style={styles.modalText}>
              이메일 혹은 비밀번호가 잘못되었습니다.
            </Text>
          </SafeAreaView>
        </Pressable>
      </Modal>
    </View>
  );
};
export default LoginWithEmailScreen;

const requestFireBase = async (fcmToken: string) => {
  try {
    const instanceATK = await getInstanceATK();
    const body = { token: fcmToken };
    const { data } = await instanceATK.post('/sign/firebase-token', body);
    console.log(data);
  } catch (e) {
    console.log(e);
    throw Error(e);
  }
};
