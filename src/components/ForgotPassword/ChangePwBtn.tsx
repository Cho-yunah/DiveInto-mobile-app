import instance from '@/src/lib/api/axios';
import {
  AuthCodeState,
  emailState,
  isAlertedState,
  isAuthenticatedState,
  isCodeRequestedState,
  newPasswordState,
  reNewPasswordState,
} from '@/src/recoil/LoginStack';
import { AxiosResponse } from 'axios';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useRecoilCallback } from 'recoil';
import { ChangePwBtnStyle as styles } from './styles';

const ChangePwBtn = () => {
  const requestChangePw = useRecoilCallback(({ snapshot, set }) => async () => {
    const isAuthenticated = await snapshot.getPromise(isAuthenticatedState);
    const isCodeRequested = await snapshot.getPromise(isCodeRequestedState);
    const newPassword = await snapshot.getPromise(newPasswordState);
    const reNewPassword = await snapshot.getPromise(reNewPasswordState);
    const authCode = await snapshot.getPromise(AuthCodeState);
    const email = await snapshot.getPromise(emailState);

    if (!isAuthenticated || !isCodeRequested || !authCode) return;
    else if (!newPassword || !reNewPassword) {
      set(isAlertedState, '새 비밀번호를 4글자 이상 입력해주세요.');
      return;
    } else if (newPassword !== reNewPassword) {
      set(isAlertedState, '새 비밀번호가 일치하지 않습니다.');
      return;
    } else if (newPassword.length < 4 || reNewPassword.length < 4) {
      set(isAlertedState, '새 비밀번호를 4글자 이상 설정해 주세요.');
      return;
    }
    try {
      const body = { email, newPassword, authCode };
      const { data }: AxiosResponse = await instance.put(
        '/account/forgot-password',
        body,
      );
      console.log(data);
      set(isAlertedState, '비밀번호가 성공적으로 변경되었습니다.');
    } catch (e) {
      console.log(e.response?.data);
      set(
        isAlertedState,
        e?.response?.data.message || '새 비밀번호 설정에 실패 하였습니다.',
      );
    }
  });
  return (
    <Pressable style={styles.container} onPress={requestChangePw}>
      <Text style={styles.btnText}>완료</Text>
    </Pressable>
  );
};

export default ChangePwBtn;
