import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { nextButtonProps } from './types';

export default function NextButton({
  onPress = () => {},
  text = '다음',
}: nextButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
