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
        {/* 강의 사진 캐러셀 */}
        <Suspense fallback={<LecturePicsCarouselSuspense />}>
          <LecturePicsCarousel />
        </Suspense>

        {/* 강의 정보/ 제목/태그/가격/강의설명 */}
        <Suspense fallback={<LectureInfoSuspense />}>
          <LectureInfo />
        </Suspense>

        {/* 강사 프로필 */}
        <Suspense fallback={<InstructorProfileSuspense />}>
          <InstructorProfile />
        </Suspense>

        {/* 위치 정보, 지도 */}
        <Suspense fallback={<SuspenseLocationInfo />}>
          <LocationInfo />
        </Suspense>

        {/* 부가서비스, 주차가능, 그룹, 장비대여 여부  */}
        <Suspense fallback={<AdditionalServiceSuspense />}>
          <AdditionalService />
        </Suspense>

        {/* 후기보기 영역 */}
        <LectureReview />
      </ScrollView>

      {/* 사진 modal */}
      <LeturePicsModal />
      {/* 찜하기 modal */}
      {/* <AlertModal /> */}
      <AutoCloseAlertModal callerName="lectureLike" />

      {/* 예약하기 버튼 */}
      <ReserveBtn navigateToReserveLecture={navigateToReserveLecture} />
    </>
  );
};

export default LectureDetailScreen;
