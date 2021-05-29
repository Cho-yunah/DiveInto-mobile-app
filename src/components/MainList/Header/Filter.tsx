import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { HeaderStyles as styles, shadow } from './styles';
import { FilterProps } from './types';

export default function Filter({ onPress }: FilterProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.filterButton, shadow]}
      onPress={onPress}
    >
      <Text style={styles.filterText}>필터검색</Text>
    </TouchableOpacity>
  );
}
