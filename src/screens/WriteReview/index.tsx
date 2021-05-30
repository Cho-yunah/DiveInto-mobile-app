import React from 'react';
import { WriteReviewProps } from '@/src/navigators/LoginStack/types';
import styles from './styles';
import { View } from 'react-native';
import { Content, StarRatings, UploadPics } from '@/src/components/WriteReview';

const WriteReviewScreen = ({ navigation }: WriteReviewProps) => {
  return (
    <View style={styles.container}>
      <StarRatings />
      <Content />
      <UploadPics />
    </View>
  );
};

export default WriteReviewScreen;
