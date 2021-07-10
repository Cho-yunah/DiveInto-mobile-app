import React from 'react';
import { View, Text } from 'react-native';

import { headerStyle as styles } from './styles';

export default function Header({ title, date }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}
