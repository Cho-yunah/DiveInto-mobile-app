import React from 'react';
import { View, FlatList } from 'react-native';

import { FAQListItem } from '@/src/components/NoticeBoard';
import { FAQComplainList } from '@assets/data/staticData';

export default function ComplainScren() {
  return (
    <View>
      <FlatList
        data={FAQComplainList}
        renderItem={({ item }) => (
          <FAQListItem desc={item.desc} key={item.id} />
        )}
      />
    </View>
  );
}
