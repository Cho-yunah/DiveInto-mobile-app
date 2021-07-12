import React from 'react';
import { View, Text } from 'react-native';

import { subContentsStyle as styles } from './styles';

export default function SubContents({ sub }: any) {
  const [greet, title] = sub.split('/');

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greet}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
