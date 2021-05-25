import React from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { inputStyles as styles } from './styles';

import { useRecoilState } from 'recoil';
import { phoneNumber } from '@recoil/LoginStack';
import { placeholder } from '@/src/config/color';

function PhoneInput() {
  const [phone, setPhone] = useRecoilState(phoneNumber);

  const autoHyphen = () =>
    phone
      .replace(/(^\d{3})-(\d{4})(\d+)/g, '$1-$2-$3')
      .replace(/(^\d{3})(\d+)/g, '$1-$2');

  const onChangeText = (text: string) => {
    console.log('Text : ', text);
    setPhone(text);
  };

  const onPress = () => {};

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.commonText}
        placeholder="휴대폰 번호"
        keyboardType="number-pad"
        onChangeText={onChangeText}
        value={autoHyphen()}
        placeholderTextColor={placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>인증번호 받기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PhoneInput;
