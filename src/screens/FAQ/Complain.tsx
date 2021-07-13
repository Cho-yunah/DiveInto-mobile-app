import React from 'react';
import { View, FlatList } from 'react-native';

import { FAQListItem } from '@/src/components/NoticeBoard';
import { FAQComplainList } from '@assets/data/FAQStaticData';

export default function ComplainScren() {
  return (
    <View>
      <FlatList
        data={FAQComplainList}
        renderItem={({ item }) => (
          <FAQListItem
            desc={item.desc}
            FAQ_id={item.id}
            key={item.id}
            type="complain"
          />
        )}
      />
    </View>
  );
}
