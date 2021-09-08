import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { inputStyles as styles } from './styles';
import { placeholder } from '@/src/config/colors';
import instance from '@/src/lib/api/axios';
import {
  emailState,
  verifyCodeState,
  isCertification,
  isCertificationError,
} from '@/src/recoil/LoginStack';

export default function CertificationInput() {
  const [uniqueNumber, setUniqueNumber] = useRecoilState(verifyCodeState);
  const [isValid, setIsValid] = useState(true);
  const setIsCertificationError = useSetRecoilState(isCertificationError);

  const email = useRecoilValue(emailState);
  const setIsCertification = useSetRecoilState(isCertification);

  const onChange = (text: string) => {
    if (text.length > 7) return;
    setUniqueNumber(text);

    checkNumberValidation(text) ? setIsValid(false) : setIsValid(true);
  };

  const requestCertificaton = async (verifyNumber: string, phone: string) => {
    try {
      const checkNumber = await instance.post('/email/code/verify', {
        email: phone,
        code: verifyNumber,
      });
      setIsCertification(checkNumber.data.success);
      setIsCertificationError(false);
    } catch (e) {
      setIsCertification(false);
      setIsCertificationError(true);
      console.log(e);
    }
  };

  return (
    <View style={[styles.inputContainer, styles.lastInputLayout]}>
      <TextInput
        style={styles.inputText}
        placeholder="인증번호"
        // keyboardType="number-pad"
        placeholderTextColor={placeholder}
        onChangeText={onChange}
        // value={uniqueNumber}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => requestCertificaton(uniqueNumber, email)}
        disabled={isValid}
      >
        <Text style={[styles.buttonText, !isValid && styles.activeButton]}>
          인증하기
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function checkNumberValidation(uniqueNum: string): boolean {
  const regex = /^[\d]{6}$/;
  return regex.test(uniqueNum);
}
