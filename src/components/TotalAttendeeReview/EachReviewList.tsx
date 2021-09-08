import React from 'react';
import { View, Text } from 'react-native';

import { EachReviewListStyle as styles } from './styles';
import { EachReivewListProps } from './types';
import OpenStars from '../LectureDetail/LectureReview/OpenStars';
import ReviewPics from './ReviewPics';

export default function EachReviewList({
  item,
}: {
  item: EachReivewListProps;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.lectureTitleUI.title}</Text>
        <Text style={styles.dateText}>
          {item.reviewModel.writeDate.replace(/-/g, '/')}
        </Text>
      </View>
      <View style={styles.startContainer}>
        <OpenStars
          rate={item.reviewModel.instructorStar}
          ratingName="강사"
          layoutCenter
        />
        <OpenStars
          rate={item.reviewModel.lectureStar}
          ratingName="강의"
          layoutCenter
        />
        <OpenStars
          rate={item.reviewModel.locationStar}
          ratingName="장소"
          layoutCenter
        />
      </View>
      <View style={styles.imageContainer}>
        <ReviewPics pics={item.reviewImageModels} />
      </View>
      <View style={styles.contentsContainer}>
        <Text style={styles.contentsText}>{item.reviewModel.description}</Text>
      </View>
    </View>
  );
}
