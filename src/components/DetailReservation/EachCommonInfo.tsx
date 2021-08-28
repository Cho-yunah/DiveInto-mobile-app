import React from 'react';
import { View, Text } from 'react-native';

import { ReserveCommonStyles as styles } from './styles';
import { EachCommonInfoProps } from './types';
export default function EachCommonInfo({
  name,
  userInfo,
  type,
  emphasis,
  size,
}: EachCommonInfoProps) {
  const typeOfStyle =
    type === 'cost' ? styles.costLayout : styles.equipmentLayout;

  if (type === 'equipment')
    return (
      <View style={[styles.itemContainer, typeOfStyle]}>
        <Text style={styles.itemName}>{name}</Text>

        <View style={styles.DescTextContainer}>
          <Text style={styles.itemSize}>{size}</Text>
          <View style={styles.borderline}>
            <Text></Text>
          </View>
          <Text style={[styles.itemDesc, emphasis && styles.emphasis]}>
            {userInfo}
          </Text>
        </View>
      </View>
    );

  return (
    <View style={[styles.itemContainer, typeOfStyle]}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={[styles.itemDesc, emphasis && styles.emphasis]}>
        {userInfo}
      </Text>
    </View>
  );
}
