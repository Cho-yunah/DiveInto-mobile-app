import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HeaderStyles as styles, shadow } from '../styles';
import { AlarmProps } from '../types';

import Bell from '@assets/Bell.svg';
import BellFill from '@assets/BellFill.svg';

export default function Alarm({ onPress, hasAlarm }: AlarmProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.bell, shadow]}
      onPress={onPress}
    >
      {hasAlarm ? <BellFill /> : <Bell />}
    </TouchableOpacity>
  );
}
