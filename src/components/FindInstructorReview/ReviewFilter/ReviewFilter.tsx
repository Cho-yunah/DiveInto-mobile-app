import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ReviewFilterStyle as styles } from './styles';
import { ReviewFilterProps } from './types';

export default function ReviewFilter({ text, active }: ReviewFilterProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, active && styles.activeButtonStyle]}
    >
      <Text style={[styles.textStyle, active && styles.activeTextStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
