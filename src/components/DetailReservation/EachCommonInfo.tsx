import React from 'react';
import { View, Text } from 'react-native';

import { ReserveCommonStyles as styles } from './styles';
import { EachCommonInfoProps } from './types';
export default function EachCommonInfo({
  name,
  userInfo,
  type,
  emphasis,
}: EachCommonInfoProps) {
  return (
    <View
      style={[
        styles.itemContainer,
        type === 'costOrEquipment' && styles.costLayout,
      ]}
    >
      <Text style={styles.itemName}>{name}</Text>
      <Text style={[styles.itemDesc, emphasis && styles.emphasis]}>
        {userInfo}
      </Text>
    </View>
  );
}
