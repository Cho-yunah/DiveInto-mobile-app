import React from 'react';
import { View, Text } from 'react-native';

import { ReserveUserOrCostStyles as styles } from './styles';
import { EachCommonInfoProps } from './types';
export default function EachCommonInfo({
  name,
  userInfo,
  type,
}: EachCommonInfoProps) {
  return (
    <View style={[styles.itemContainer, type === 'cost' && styles.costLayout]}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemDesc}>{userInfo}</Text>
    </View>
  );
}
