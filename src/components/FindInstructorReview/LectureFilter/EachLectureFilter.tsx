import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ReviewFilterStyle as styles } from './styles';
import { LectureFilterProps } from '../types';

export default function EachLectureFilter({
  text,
  active,
}: LectureFilterProps) {
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
