import React from 'react';
import { FlatList, View } from 'react-native';

import { FAQListItem } from '@/src/components/NoticeBoard';
import { FAQofETCList } from '@assets/data/FAQStaticData';

export default function ETCScreen() {
  return (
    <View>
      <FlatList
        data={FAQofETCList}
        renderItem={({ item }) => (
          <FAQListItem
            desc={item.desc}
            FAQ_id={item.id}
            key={item.id}
            type="ETC"
          />
        )}
      />
    </View>
  );
}
