import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { FAQListItem } from '@/src/components/NoticeBoard';
import { FAQLecturerList } from '@assets/data/FAQStaticData';

export default function LecturerQuestionScreen() {
  return (
    <View>
      <FlatList
        data={FAQLecturerList}
        renderItem={({ item }) => {
          return (
            <FAQListItem
              desc={item.desc}
              FAQ_id={item.id}
              key={item.id}
              type="lecturer"
            />
          );
        }}
      />
    </View>
  );
}
