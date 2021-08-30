import { passwordLoginState } from '@/src/recoil/LoginStack';
import React, { useState, useEffect } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import useTransitionColor from '../Login/useTransitionColor';
import styles from './styles';

export default function LoginWithEmail() {
  const [isPWVisible, setIsPWVisible] = useState(false);
  const [password, setPassword] = useRecoilState(passwordLoginState);

  const [isValid, setIsValid, interpolations] = useTransitionColor({
    screen: 'PwInput',
  });

  // 패스워드 입력값은 화면이 생성될 때마다 초기화되므로 아톰 값도 초기화
  useEffect(() => {
    setIsValid(undefined);
  }, []);

  const onPasswordInput = (text: string) => {
    setPassword(text);
    setIsValid(text.length > 3 ? true : false);
  };

  const onPWVisiblePress = () => setIsPWVisible(!isPWVisible);

  return (
    <View style={styles.container}>
      <TextInput
        textContentType={'newPassword'}
        secureTextEntry={isPWVisible ? false : true}
        placeholder="비밀번호를 입력해주세요"
        style={styles.TextInput}
        onChangeText={onPasswordInput}
        value={password}
        spellCheck={false}
      />
      <Pressable
        style={styles.TextInputIconContainer}
        onPress={onPWVisiblePress}
      >
        <Ionicons
          name="eye"
          size={20}
          style={[
            styles.TextInputIcons,
            { color: isPWVisible ? '#343434' : '#E0E0E1' },
          ]}
        />
      </Pressable>
    </View>
  );
}
