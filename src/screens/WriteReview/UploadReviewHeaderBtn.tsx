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
import {
  AttendeeReviewListCachingState,
  WriteReviewCachingState,
} from '@/src/recoil/ProfileStack/store';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
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
  const setWriteReviewCache = useSetRecoilState(WriteReviewCachingState);
  const setAttendeeReviewListCache = useSetRecoilState(
    AttendeeReviewListCachingState,
  );

  // 후기 작성 관련 임시 리셋 기능
  const resetInstructor = useResetRecoilState(ratingStarState('강사'));
  const resetLecture = useResetRecoilState(ratingStarState('강의'));
  const resetLocation = useResetRecoilState(ratingStarState('장소'));
  const resetContents = useResetRecoilState(contentState);
  const resetPics = useResetRecoilState(picsArrState);

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
        setWriteReviewCache(prevState => prevState + 1);
        setAttendeeReviewListCache(prevState => prevState + 1);

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

  useEffect(() => {
    return () => {
      // 후기 작성 관련 임시 리셋 기능
      resetInstructor();
      resetLecture();
      resetLocation();
      resetContents();
      resetPics();
    };
  }, []);

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
