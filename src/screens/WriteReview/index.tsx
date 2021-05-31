import React from 'react';
import { WriteReviewProps } from '@/src/navigators/ReviewStack/types';
import styles from './styles';
import { Pressable, Text, View } from 'react-native';
import { Content, StarRatings, UploadPics } from '@/src/components/WriteReview';

const WriteReviewScreen = ({ navigation }: WriteReviewProps) => {
  navigation.setOptions({
    headerRight: () => (
      <Pressable onPress={() => {}} style={styles.headerButton}>
        <Text style={styles.headerButtonText}>완료</Text>
      </Pressable>
    ),
  });
  return (
    <View style={styles.container}>
      <StarRatings />
      <Content />
      <UploadPics />
    </View>
  );
};

export default WriteReviewScreen;
