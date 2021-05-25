import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { inputStyles as styles } from './styles';
import { placeholder } from '@/src/config/color';

function NicknameInput() {
  const onPress = () => {};

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.commonText]}
        placeholder="닉네임"
        placeholderTextColor={placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>중복검사</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NicknameInput;
