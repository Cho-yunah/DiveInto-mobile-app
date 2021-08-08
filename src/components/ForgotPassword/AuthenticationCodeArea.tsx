import {
  AuthCodeState,
  emailState,
  isAlertedState,
  isAuthenticatedState,
  isCodeRequestedState,
} from '@/src/recoil/LoginStack';
import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthenticationCodeAreaStyle as styles } from './styles';
import { AxiosResponse } from 'axios';
import instance from '@/src/lib/api/axios';
import AuthenticationCodeInput from './AuthenticationCodeInput';

const AuthenticationCodeArea = () => {
  const email = useRecoilValue(emailState);
  const [isCodeRequested, setIsCodeRequested] =
    useRecoilState(isCodeRequestedState);
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const setIsAlerted = useSetRecoilState(isAlertedState);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const setAuthCode = useSetRecoilState(AuthCodeState);

  const requestEmailCode = async () => {
    setIsAuthenticated(false);
    const body = {
      email,
    };
    try {
      const { data }: AxiosResponse = await instance.post(
        '/email/code/send',
        body,
      );
      data?.success && setIsCodeRequested(true);
    } catch (e) {
      console.log(e);
      setIsAlerted('인증번호 요청간 에러가 발생하였습니다.');
      setIsCodeRequested(false);
    }
  };

  useEffect(() => {
    return () => {
      setIsCodeRequested(false);
      setAuthCode('');
      setIsAuthenticated(false);
    };
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>{email}</Text>
        <Pressable
          style={styles.RequestCodeBtn}
          disabled={isAuthenticated}
          onPress={() => {
            setIsCodeRequested(true);
            setIsAlerted('이메일로 인증번호가 전송되었습니다.');
            requestEmailCode();
          }}
        >
          <Text
            style={[
              styles.RequestCodeBtnText,
              { color: isAuthenticated ? '#D8D8D8' : '#207AB4' },
            ]}
          >
            {isAuthenticated
              ? '인증 완료'
              : isCodeRequested
              ? '인증번호 재요청'
              : '인증번호 받기'}
          </Text>
        </Pressable>
      </View>
      {isCodeRequested && <AuthenticationCodeInput />}
    </View>
  );
};

export default AuthenticationCodeArea;
