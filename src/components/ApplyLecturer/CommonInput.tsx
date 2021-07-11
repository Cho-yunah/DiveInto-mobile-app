import React from 'react';
import { View, TextInput } from 'react-native';

import { commonInput as styles } from './styles';
import { placeholder } from '@/src/config/colors';
import { CommonInputProps } from './types';

// 강사 소개, 소속 단체 관련 TextInput Component
export default function CommonInput({
  placeholderText,
  topBlank,
  value,
  handleInputText,
}: CommonInputProps) {
  const onChangeText = (text: string) => {
    handleInputText(text);
  };

  return (
    <View style={[styles.container, topBlank && styles.topBlank]}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholderText}
        placeholderTextColor={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
