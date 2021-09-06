import React from 'react';
import { WriteReviewScreenProps } from '@navigators/AttendeeScheduleStack/types';
import styles from './styles';
import { ScrollView, View } from 'react-native';
import UploadReviewHeaderBtn from './UploadReviewHeaderBtn';
import { Content, StarRatings, UploadPics } from '@/src/components/WriteReview';
import WriteReviewLoadingModal from './WriteReviewLoadingModal';

const WriteReviewScreen = ({ navigation, route }: WriteReviewScreenProps) => {
  const { reservationId } = route.params;

  navigation.setOptions({
    // headerRight: () => <UploadReviewHeaderBtn reservationId={reservationId} />,
    headerRight: () => <UploadReviewHeaderBtn reservationId={reservationId} />,
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <StarRatings />
          <Content />
          <UploadPics />
        </ScrollView>
      </View>
      <WriteReviewLoadingModal />
    </>
  );
};

export default WriteReviewScreen;
