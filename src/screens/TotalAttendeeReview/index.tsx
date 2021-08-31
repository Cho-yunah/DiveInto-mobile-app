import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { getAttendeeReviews } from '@recoil/ProfileStack/dataFetch';
import withSuspense from '@lib/HOC/withSuspense';
import { EachReviewList } from '@/src/components/TotalAttendeeReview';
import { AttendeeReviewDataType } from './types';
import { styles } from './styles';
import CommonEmptyView from '@/src/components/common/CommonEmptyView';

function TotalAttendeeReviewScreen() {
  const reviews = useRecoilValue<AttendeeReviewDataType>(getAttendeeReviews);
  // console.log(reviews.list, reviews.totalElements);

  if (!reviews.totalElements) {
    return (
      <CommonEmptyView
        guideText="작성된 리뷰가 없습니다."
        buttonText="프로필로 이동"
        moveViewName="ProfileMain"
      />
    );
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.titleContainer}>
        <Text
          style={styles.titleNum}
        >{`작성한 리뷰 ${reviews.totalElements}개`}</Text>
      </View> */}

      <FlatList
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        data={reviews.list}
        renderItem={({ item }) => {
          return <EachReviewList item={item} />;
        }}
        keyExtractor={item => String(item.reviewModel.id)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default withSuspense(TotalAttendeeReviewScreen);
