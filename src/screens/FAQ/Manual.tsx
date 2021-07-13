import React from 'react';
import { View, FlatList } from 'react-native';

import { FAQListItem } from '@/src/components/NoticeBoard';
import { FAQManualList } from '@assets/data/FAQStaticData';

export default function ManualScreen() {
  return (
    <View>
      <FlatList
        data={FAQManualList}
        renderItem={({ item }) => (
          <FAQListItem
            desc={item.desc}
            FAQ_id={item.id}
            key={item.id}
            type="manual"
          />
        )}
      />
    </View>
  );
}
