import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

const Pics = ({ pics }: { pics: string[] }) => {
  return (
    <FlatList
      contentContainerStyle={{ marginTop: 8 }}
      data={pics}
      renderItem={({ item, index }) => (
        <Pressable
          key={item}
          onPress={() => console.warn(index)}
          style={{ marginRight: 8 }}
        >
          <Image source={{ uri: item, width: 72, height: 46 }} />
        </Pressable>
      )}
      horizontal
    />
  );
};

export default Pics;
