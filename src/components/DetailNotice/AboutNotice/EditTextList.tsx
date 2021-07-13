import React from 'react';
import { View, Text } from 'react-native';

import { editContentsStyle as styles } from './styles';

export default function EditTextList({ contents }: any) {
  const [title, desc] = contents.split('-');

  return (
    <View style={styles.contentsContainer}>
      <Text style={styles.textHeigth}>{title}</Text>
      <Text style={styles.textHeigth}>{`-${desc}`}</Text>
    </View>
  );
}
