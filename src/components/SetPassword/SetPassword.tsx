import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { PWInputProps } from './types';

import { useRecoilState } from 'recoil';
import { password as PW, rePassword as RePW } from '@recoil/LoginStack';

export default function SetPassword() {
  const [password, setPassword] = useRecoilState(PW);
  const [rePassword, setRePassword] = useRecoilState(RePW);

  const [isShow, setisShow] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  const updateSecureTextEntry = () => {
    setisShow(!isShow);
  };
  const onChangePW = (value: string) => setPassword(value);
  const onChangeRePW = (value: string) => setRePassword(value);

  useEffect(() => {
    validation();
  }, [password, rePassword]);

  // 유효성 검사 함수
  const validation = () => {
    const passwordReg =  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    const hasEveryCharacter = passwordReg.test(password);
    const isLongerThanTen = password.length >= 10 ? true : false;

    if (password) {
      hasEveryCharacter &&
      isLongerThanTen 
        ? setIsValid(true)
        : setIsValid(false),
        setIsMatch(false);
    }
    password === rePassword ? setIsMatch(true) : setIsMatch(false);
  };

  return (
    <View style={styles.container}>
      <PWInput
        isShow={isShow}
        updateSecureTextEntry={updateSecureTextEntry}
        onChangeText={onChangePW}
        placeholder="비밀번호"
        isEmpty={password.length === 0}
        isValid={isValid}
        validMessage="올바른 형태의 비밀번호입니다."
        invalidMessage="10~16자 영문과 숫자를 조합해주세요."
      />
      <PWInput
        isShow={isShow}
        updateSecureTextEntry={updateSecureTextEntry}
        onChangeText={onChangeRePW}
        placeholder="비밀번호 확인"
        isEmpty={rePassword.length === 0}
        isValid={isMatch}
        validMessage="위의 비밀번호와 일치합니다."
        invalidMessage="작성한 비밀번호와 다른 비밀번호입니다"
      />
    </View>
  );
}

const PWInput = ({
  isShow,
  onChangeText,
  updateSecureTextEntry,
  placeholder,
  isEmpty,
  isValid,
  validMessage,
  invalidMessage,
}: PWInputProps) => (
  <>
    <View
      style={[
        styles.inputBox,
        !isEmpty && { borderBottomColor: isValid ? '#38D1A8' : '#E93A55' },
      ]}
    >
      <TextInput
        style={styles.passwordInput}
        placeholder={placeholder}
        placeholderTextColor="#D8D8D8"
        autoCapitalize="none"
        secureTextEntry={!isShow}
        onChangeText={text => {
          console.log(text);
          onChangeText(text);
        }}
      />
      <TouchableOpacity onPress={updateSecureTextEntry}>
        <Ionicons
          name={!isShow ? 'eye' : 'eye-off'}
          color={!isEmpty && isValid ? '#38D1A8' : '#E0E0E1'}
          size={24}
        />
      </TouchableOpacity>
    </View>
    <Text style={[styles.messageText, isValid ? styles.valid : styles.invalid]}>
      {isEmpty ? '' : isValid ? validMessage : invalidMessage}
    </Text>
  </>
);
