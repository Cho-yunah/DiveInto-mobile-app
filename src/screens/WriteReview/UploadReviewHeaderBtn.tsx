import {
  contentState,
  picsArrState,
  ratingStarState,
} from '@/src/recoil/ReviewStack';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import styles from './styles';

const UploadReviewHeaderBtn = () => {
  const instructorRating = useRecoilValue(ratingStarState('강사'));
  const lectureRating = useRecoilValue(ratingStarState('강의'));
  const placeRating = useRecoilValue(ratingStarState('장소'));
  const content = useRecoilValue(contentState);
  const picsArr = useRecoilValue(picsArrState);

  const isReadyToUpload = () =>
    instructorRating &&
    lectureRating &&
    placeRating &&
    content.length &&
    picsArr.length <= 3;

  return (
    <TouchableOpacity
      onPress={() => {
        console.warn('upload!');
      }}
      style={styles.headerButton}
      disabled={!isReadyToUpload()}
    >
      <Text
        style={{
          color: isReadyToUpload() ? '#F5DAAC' : '#c1c2c3',
          fontWeight: 'bold',
          fontSize: 18,
        }}
      >
        완료
      </Text>
    </TouchableOpacity>
  );
};

export default UploadReviewHeaderBtn;
