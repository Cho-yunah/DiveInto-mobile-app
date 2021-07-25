import React from 'react';
import { View, Text } from 'react-native';
import { CostStyle as styles } from './styles';

export default function Price({ cost }: { cost: number }) {
  return (
    <View style={styles.costContainer}>
      <Text style={styles.cost}>{cost.toLocaleString()}</Text>
      <Text>원</Text>
    </View>
  );
}
