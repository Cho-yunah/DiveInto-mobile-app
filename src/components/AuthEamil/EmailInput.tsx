import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRecoilState } from 'recoil';

import { inputStyles as styles } from './styles';
import { placeholder } from '@/src/config/colors';
import instance from '@/src/lib/api/axios';
import { emailState } from '@recoil/LoginStack';

export default function EmailInput() {
  const [email, setPhone] = useRecoilState(emailState);

  const requestCertificationNumber = async (phone: string) => {
    try {
      const checkEmail = await instance.post('/email/code/send', {
        email: phone,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.commonText}>{email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => requestCertificationNumber(email)}
        // disabled={!isValid}
      >
        <Text style={styles.activeButton}>인증번호 받기</Text>
      </TouchableOpacity>
    </View>
  );
}
