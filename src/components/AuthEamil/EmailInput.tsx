import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRecoilState } from 'recoil';

import { inputStyles as styles } from './styles';
import { placeholder } from '@/src/config/colors';
import instance from '@/src/lib/api/axios';
import { emailState } from '@recoil/LoginStack';

export default function EmailInput() {
  const [email, setPhone] = useRecoilState(emailState);
  // const [isValid, setIsValid] = useRecoilState(MueberScreenIsEmailValid);
  // const onChangeText = (text: string) => {
  //   // checkEmailValidation(text) ? setIsValid(true) : setIsValid(false);
  //   setPhone(text);
  // };

  const requestCertificationNumber = async (phone: string) => {
    try {
      const checkEmail = await instance.post('/email/code/send', {
        email: phone,
      });
      console.log(checkEmail.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.inputContainer}>
      {/* <TextInput
        style={styles.commonText}
        placeholder="휴대폰 번호"
        keyboardType="number-pad"
        onChangeText={onChangeText}
        value={email}
        placeholderTextColor={placeholder}
      /> */}
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

// function checkEmailValidation(email: string): boolean {
//   const regex =
//     /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9-_]+).([a-z]{2,20})(.[a-z]{2,10})$/;
//   return regex.test(email);
// }
