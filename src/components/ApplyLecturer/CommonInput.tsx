import React from 'react';
import { View, TextInput } from 'react-native';

import { commonInput as styles } from './styles';
import { placeholder } from '@/src/config/colors';
import { CommonInputProps } from './types';

export default function CommonInput({
  placeholderText,
  topBlank,
}: CommonInputProps) {
  const onChangeText = () => console.log('change text');

  return (
    <View style={[styles.container, topBlank && styles.topBlank]}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholderText}
        placeholderTextColor={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
}
