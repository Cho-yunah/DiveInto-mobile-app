import {
  lectureModalState,
  lecutureModalSelectedIdxState,
} from '@/src/recoil/LectureStack';
import React from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { useSetRecoilState } from 'recoil';

const Pics = ({ pics }: { pics: string[] }) => {
  const setLectureModalPics = useSetRecoilState(lectureModalState);
  const setSelectedIdx = useSetRecoilState(lecutureModalSelectedIdxState);
  const reviewPics = pics.map(pic => ({ url: pic }));

  return (
    <FlatList
      contentContainerStyle={{ marginTop: 8 }}
      data={pics}
      keyExtractor={item => item}
      renderItem={({ item, index }) => (
        <Pressable
          key={item}
          onPress={() => {
            setLectureModalPics(reviewPics);
            setSelectedIdx(index);
          }}
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
