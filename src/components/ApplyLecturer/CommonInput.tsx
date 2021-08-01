import React from 'react';
import { View, TextInput } from 'react-native';

import { inputStyle as styles, containerShadowBox } from './styles';
import { placeholder } from '@/src/config/colors';
import { CommonInputProps } from './types';

// 강사 소개, 소속 단체 관련 TextInput Component
export default function CommonInput({
  placeholderText,
  value,
  handleInputText,
}: CommonInputProps) {
  const onChangeText = (text: string) => {
    handleInputText(text);
  };

  return (
    <View style={[styles.container, containerShadowBox.container]}>
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
