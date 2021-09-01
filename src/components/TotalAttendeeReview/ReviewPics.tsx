import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { ReviewPicsProps } from './types';

export default function ReviewPics({ pics }: { pics: ReviewPicsProps[] }) {
  return (
    <FlatList
      contentContainerStyle={{ marginTop: 8 }}
      data={pics}
      renderItem={({ item }: { item: ReviewPicsProps }) => (
        <View style={{ paddingHorizontal: 5 }}>
          <Image source={{ uri: item.url, width: 102, height: 76 }} />
        </View>
      )}
      keyExtractor={item => String(item.id)}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
