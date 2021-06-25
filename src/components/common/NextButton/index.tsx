import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { nextButtonProps } from './types';

export default function NextButton({
  onPress = () => {},
  text = '다음',
  disable,
}: nextButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} disabled={!disable}>
      <Text style={[styles.btnText, disable && styles.ActivationButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
