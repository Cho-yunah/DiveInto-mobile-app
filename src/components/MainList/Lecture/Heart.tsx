import React, { useState } from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';

import { Selected, UnSelected } from '@config/colors';
import HeartIcon from '@assets/Heart.svg';
import { HeartProps } from './types';

export default function Heart({ containerStyle, isMarked }: HeartProps) {
  return (
    <View style={containerStyle}>
      <HeartIcon
        width={20}
        height={20}
        style={isMarked ? { color: Selected } : { color: UnSelected }}
      />
    </View>
  );
}
