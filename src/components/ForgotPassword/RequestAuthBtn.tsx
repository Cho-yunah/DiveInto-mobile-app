import instance from '@/src/lib/api/axios';
import {
  AuthCodeState,
  emailState,
  isAlertedState,
  isAuthenticatedState,
  isCodeRequestedState,
} from '@/src/recoil/LoginStack';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { AuthenticationCodeAreaStyle as styles } from './styles';

const RequestAuthBtn = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);

  const requestCheckingAuthCode = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        const code = await snapshot.getPromise(AuthCodeState);
        const email = await snapshot.getPromise(emailState);
        const body = {
          email,
          code,
        };
        try {
          const { data } = await instance.post('/email/code/verify', body);
          data.success === true && setIsAuthenticated(true);
          console.log(data);
          set(
            isAlertedState,
            '이메일 인증에 성공! 새 비밀번호를 입력해주세요.',
          );
        } catch (e) {
          console.log(e.response.data);
          set(
            isAlertedState,
            '이메일 인증에 실패하였습니다. 다시 확인해주세요.',
          );
          setIsAuthenticated(false);
          set(AuthCodeState, '');
        }
      },
  );

  return (
    <Pressable
      onPress={() => {
        requestCheckingAuthCode();
      }}
    >
      <Text
        style={[
          styles.RequestCodeBtnText,
          { color: isAuthenticated ? '#D8D8D8' : '#207AB4' },
        ]}
      >
        {isAuthenticated ? '인증 완료' : '인증번호 확인'}
      </Text>
    </Pressable>
  );
};

export default RequestAuthBtn;
