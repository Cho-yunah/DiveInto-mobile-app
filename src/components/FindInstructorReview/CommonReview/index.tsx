import React from 'react';
import { FlatList, View } from 'react-native';
import PersonalReview from '@components/LectureDetail/LectureReview/PersonalReview';
import { lectureReviewAllType } from '@recoil/ProfileStack/types';
import { CommonReviewProps, RenderItemParams } from './types';

export default function CommonReview({ reviews }: CommonReviewProps) {
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
