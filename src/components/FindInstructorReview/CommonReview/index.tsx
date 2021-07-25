import React from 'react';
import { FlatList, View } from 'react-native';
import PersonalReview from '@components/LectureDetail/LectureReview/PersonalReview';
import { lectureReviewAllType } from '@/src/recoil/ProfileStack';

export default function CommonReview({ reviews }: lectureReviewAllType[]) {
  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return <PersonalReview item={item} />;
        }}
        keyExtractor={item => {
          return `item_key${item.id}`;
        }}
      />
    </View>
  );
}
