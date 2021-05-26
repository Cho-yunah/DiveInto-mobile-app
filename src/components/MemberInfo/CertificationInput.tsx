import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { inputStyles as styles } from './styles';
import { placeholder } from '@/src/config/colors';

function CertificationInput() {
  const onPress = () => {};

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.commonText}
        placeholder="인증번호"
        keyboardType="number-pad"
        placeholderTextColor={placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>인증하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CertificationInput;
