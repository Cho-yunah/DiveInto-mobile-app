import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { FAQListItem } from '@/src/components/NoticeBoard';
import { FAQLecturerList } from '@assets/data/staticData';

export default function LecturerQuestionScreen() {
  return (
    <View>
      <FlatList
        data={FAQLecturerList}
        renderItem={({ item }) => (
          <FAQListItem desc={item.desc} key={item.id} />
        )}
      />
    </View>
  );
}
