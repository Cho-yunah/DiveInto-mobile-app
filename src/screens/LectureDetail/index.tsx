import React, { Suspense } from 'react';
import AdditionalService from '@/src/components/LectureDetail/AdditionalService';
import InstructorProfile from '@/src/components/LectureDetail/InstructorProfile';
import LectureInfo from '@/src/components/LectureDetail/LectureInfo';
import LecturePicsCarousel from '@/src/components/LectureDetail/LecturePicsCarousel';
import LocationInfo from '@/src/components/LectureDetail/LocationInfo';
import LectureReview from '@/src/components/LectureDetail/LectureReview';
import ReserveBtn from '@/src/components/LectureDetail/LectureReview/ReserveBtn';
import { LectureDetailProps } from '@/src/navigators/LectureStack/types';
import { ScrollView } from 'react-native';
import { LectureDetailScreenStyle as styles } from './styles';
import { useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { lectureIdState } from '@/src/recoil/LectureStack';
import LeturePicsModal from '@/src/components/LectureDetail/LecturePicsModal';
import AdditionalServiceSuspense from '@/src/components/LectureDetail/AdditionalService/AdditionalServiceSuspense';
import LectureInfoSuspense from '@/src/components/LectureDetail/LectureInfo/LectureInfoSuspense';
import LecturePicsCarouselSuspense from '@/src/components/LectureDetail/LecturePicsCarousel/LecturePicsCarouselSuspense';
import InstructorProfileSuspense from '@/src/components/LectureDetail/InstructorProfile/InstructorProfileSuspense';
import SuspenseLocationInfo from '@/src/components/LectureDetail/LocationInfo/SuspenseLocationInfo';
import LectureDetailLikeBtn from '@/src/components/LectureDetail/LectureDetailLikeBtn';
import AutoCloseAlertModal from '@/src/components/common/AutoCloseAlertModal';

const LectureDetailScreen = ({ navigation, route }: LectureDetailProps) => {
  const { lectureId } = route.params;
  const setLectureId = useSetRecoilState(lectureIdState);

  console.log(lectureId);

  const navigateToReserveLecture = () =>
    navigation.navigate('ReserveLecture', { lectureId });

  useLayoutEffect(() => {
    setLectureId(lectureId);

    navigation.setOptions({
      headerRight: () => (
        <Suspense fallback={<></>}>
          <LectureDetailLikeBtn />
        </Suspense>
      ),
    });
  }, []);

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* ?????? ?????? ????????? */}
        <Suspense fallback={<LecturePicsCarouselSuspense />}>
          <LecturePicsCarousel />
        </Suspense>

        {/* ?????? ??????/ ??????/??????/??????/???????????? */}
        <Suspense fallback={<LectureInfoSuspense />}>
          <LectureInfo />
        </Suspense>

        {/* ?????? ????????? */}
        <Suspense fallback={<InstructorProfileSuspense />}>
          <InstructorProfile />
        </Suspense>

        {/* ?????? ??????, ?????? */}
        <Suspense fallback={<SuspenseLocationInfo />}>
          <LocationInfo />
        </Suspense>

        {/* ???????????????, ????????????, ??????, ???????????? ??????  */}
        <Suspense fallback={<AdditionalServiceSuspense />}>
          <AdditionalService />
        </Suspense>

        {/* ???????????? ?????? */}
        <LectureReview />
      </ScrollView>

      {/* ?????? modal */}
      <LeturePicsModal />
      {/* ????????? modal */}
      {/* <AlertModal /> */}
      <AutoCloseAlertModal callerName="lectureLike" />

      {/* ???????????? ?????? */}
      <ReserveBtn navigateToReserveLecture={navigateToReserveLecture} />
    </>
  );
};

export default LectureDetailScreen;
