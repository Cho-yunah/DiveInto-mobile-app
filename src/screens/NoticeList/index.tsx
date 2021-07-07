import React from 'react';
import { FlatList, ScrollView } from 'react-native';

// import
import { NoticeListItem } from '@/src/components/NoticeBoard';
import { noticeList } from '@assets/data/staticData';

export default function NoticeListScreen() {
  return (
    <FlatList
      data={[...noticeList]}
      renderItem={({ item }) => (
        <NoticeListItem
          title={item.title}
          date={item.date}
          id={item.id}
          key={item.id}
        />
      )}
    />
  );
}
