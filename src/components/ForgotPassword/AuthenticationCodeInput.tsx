import { AuthCodeState, isAuthenticatedState } from '@/src/recoil/LoginStack';
import React, { Suspense } from 'react';
import { View, Animated, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useRecoilState, useRecoilValue } from 'recoil';
import RequestAuthBtn from './RequestAuthBtn';
import { AuthenticationCodeAreaStyle as styles } from './styles';
import useTranslateWithOpacity from './useTranslateWithOpacity';

const AuthenticationCodeInput = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const [authCode, setAuthCode] = useRecoilState(AuthCodeState);

  const AnimatedContainer = Animated.createAnimatedComponent(View);
  const [opacityValue, translateYValue] = useTranslateWithOpacity(-100);

  return (
    <AnimatedContainer
      style={[
        {
          opacity: opacityValue,
          transform: [
            {
              translateY: translateYValue,
            },
          ],
        },
      ]}
    >
      <View style={styles.codeInputContainer}>
        {isAuthenticated ? (
          <View style={styles.codeInput}>
            <Text style={{ color: '#6A6D70' }}>{authCode}</Text>
          </View>
        ) : (
          <TextInput
            placeholder="인증번호를 입력해주세요."
            style={styles.codeInput}
            placeholderTextColor="#6A6D70"
            maxLength={10}
            autoFocus={true}
            value={authCode}
            onChange={e => setAuthCode(e.nativeEvent.text)}
          />
        )}
        <Suspense fallback={<ActivityIndicator />}>
          <RequestAuthBtn />
        </Suspense>
      </View>
    </AnimatedContainer>
  );
};

export default AuthenticationCodeInput;
