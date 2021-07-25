import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { styles } from './styles';
import { FAQContentsProps } from './types';

export default function FAQContents({ subject, descList }: FAQContentsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.subjectStyle}>{subject}</Text>

      <FlatList
        data={descList}
        renderItem={({ item }) => {
          return <Text style={styles.descStyle}>{item.contents}</Text>;
        }}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}
