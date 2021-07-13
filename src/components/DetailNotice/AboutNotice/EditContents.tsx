import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { editContentsStyle as styles } from './styles';
import EditTextList from './EditTextList';

export default function EditContents({ edit }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={edit}
        renderItem={({ item }) => <EditTextList contents={item.contents} />}
        keyExtractor={item => {
          return String(item.id);
        }}
      />
    </View>
  );
}
