import React from 'react';
import { TextInput, View } from 'react-native';
import { inputStyles as styles } from './styles';

import { useRecoilState } from 'recoil';
import { phoneNumber } from '@recoil/LoginStack';
import { placeholder } from '@/src/config/colors';

function PhoneInput() {
  const [phone, setPhone] = useRecoilState(phoneNumber);

  const autoHyphen = () =>
    phone
      .replace(/(^\d{3})-(\d{4})(\d+)/g, '$1-$2-$3')
      .replace(/(^\d{3})(\d+)/g, '$1-$2');

  const onChangeText = (text: string) => {
    setPhone(text);
  };

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
    </View>
  );
}

export default PhoneInput;
