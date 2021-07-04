import React from 'react';
import { WriteReviewProps } from '@/src/navigators/ReviewStack/types';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import UploadReviewHeaderBtn from './UploadReviewHeaderBtn';
import { Content, StarRatings, UploadPics } from '@/src/components/WriteReview';

const WriteReviewScreen = ({ navigation }: WriteReviewProps) => {
  navigation.setOptions({
    headerRight: () => <UploadReviewHeaderBtn />,
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <StarRatings />
        <Content />
        <UploadPics />
      </ScrollView>
    </View>
  );
};

export default WriteReviewScreen;
