import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { ReviewCollectionProps } from '@navigators/ProfileStack/types';
import useGetAllReview from './useGetAllReview';
import ReivewTotalAvg from '@components/FindInstructorReview/ReviewTotalAvg';
import ReviewFilter from '@components/FindInstructorReview/ReviewFilter';
import CommonReview from '@/src/components/FindInstructorReview/CommonReview';

export default function ReviewCollectionScreen({
  route,
}: ReviewCollectionProps) {
  const { id } = route.params;
  const { sortBy, setSortBy, reviews } = useGetAllReview(id);

  return (
    <ScrollView style={styles.container}>
      {/* 강의 평균 리뷰 점수 컴포넌트 */}
      <ReivewTotalAvg id={id} />

      {/* 팔터 관련 컴포넌트 */}
      <ReviewFilter sortBy={sortBy} setSortBy={setSortBy} />

      {/* 각각의 리뷰 정보 컴포넌트 */}
      {reviews && <CommonReview reviews={reviews} />}
    </ScrollView>
  );
}
