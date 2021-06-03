import React, { useCallback } from 'react';
import { Animated, Pressable, Text } from 'react-native';
import useTransitionColor from '@components/Login/useTransitionColor';
import styles from './styles';
import { LoginButtonProps } from './types';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  passwordLoginState,
  emailState,
  isLoadingState,
} from '@recoil/LoginStack';
import { useFocusEffect } from '@react-navigation/core';

export default function LoginWithEmail({ requestLogin }: LoginButtonProps) {
  const password = useRecoilValue(passwordLoginState);
  const [email, setEmail] = useRecoilState(emailState);
  const [loading, setIsLoading] = useRecoilState(isLoadingState);
  const TransitionPressable = Animated.createAnimatedComponent(Pressable);
  const TransitionText = Animated.createAnimatedComponent(Text);
  const [isValid, setIsValid, interpolations] = useTransitionColor({
    screen: 'PwInput',
  });

  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       setIsValid(undefined);
  //       setEmail('');
  //     };
  //   }, []),
  // );

  return (
    <TransitionPressable
      disabled={!isValid}
      style={[
        styles.transitionPressable,
        { backgroundColor: interpolations.backgroundColorInterpolation },
      ]}
      onPress={() => requestLogin(email, password, setIsLoading)}
    >
      <TransitionText
        style={[
          styles.transitionText,
          { color: interpolations.colorInterpolation },
        ]}
      >
        {loading ? 'Loading...' : '로그인하기'}
      </TransitionText>
    </TransitionPressable>
  );
}
