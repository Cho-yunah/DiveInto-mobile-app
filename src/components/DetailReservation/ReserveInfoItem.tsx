import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { ReserveInfoStyles as styles } from './styles';
import { ReserveInfoItemProps } from './types';

export default function ReserveInfoItem({
  title,
  iconName,
}: ReserveInfoItemProps) {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <FontAwesome5 name={iconName} size={20} color="#343434" />
      <Text style={styles.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
