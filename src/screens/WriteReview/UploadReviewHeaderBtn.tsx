import {
  requestPostReviewContentOrImages,
  getFormData,
} from '@/src/lib/utils/requestPostReview';
import { smallModalMessageState } from '@/src/recoil/LectureStack';
import {
  contentState,
  isModalOpenState,
  picsArrState,
  ratingStarState,
} from '@/src/recoil/ProfileStack';
import { WriteReviewCachingState } from '@/src/recoil/ProfileStack/store';
import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './styles';
import { UploadReviewHeaderBtnProps } from './types';

const UploadReviewHeaderBtn = ({
  reservationId,
}: UploadReviewHeaderBtnProps) => {
  const instructorStar = useRecoilValue(ratingStarState('강사'));
  const lectureStar = useRecoilValue(ratingStarState('강의'));
  const locationStar = useRecoilValue(ratingStarState('장소'));
  const content = useRecoilValue(contentState);
  const picsArr = useRecoilValue(picsArrState);
  const setIsLoadingModalOpen = useSetRecoilState(isModalOpenState);
  const navigation = useNavigation();
  const setTriteReviewsetCache = useSetRecoilState(WriteReviewCachingState);

  const isReadyToUpload = () =>
    instructorStar &&
    lectureStar &&
    locationStar &&
    content.length &&
    picsArr.length <= 3;

  const requestPostReview = async () => {
    setIsLoadingModalOpen(true);
    try {
      const body = {
        reservationId, //나중에 reservationId 건네받아서 전달
        instructorStar,
        lectureStar,
        locationStar,
        description: content,
      };

      const reviewId = await requestPostReviewContentOrImages(body);

      console.log(reviewId);

      if (typeof reviewId === 'number' && picsArr.length) {
        const imageRes = await requestPostReviewContentOrImages(
          getFormData(reservationId, reviewId, picsArr),
        ); // 첫번째 인자 나중에 reservationId 건네받아서 전달
        setTriteReviewsetCache(prevState => prevState + 1);

        console.log(imageRes);
        console.warn('후기 작성 완료');

        console.log(reviewId);
      }
    } catch (e) {
      console.log(e?.response?.data);
      console.warn('후기 작성 에러');
    }

    setIsLoadingModalOpen(false);

    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={() => requestPostReview()}
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
