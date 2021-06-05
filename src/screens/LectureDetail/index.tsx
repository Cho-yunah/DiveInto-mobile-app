import React from 'react';
import AdditionalService from '@/src/components/LectureDetail/AdditionalService';
import InstructorProfile from '@/src/components/LectureDetail/InstructorProfile';
import LectureInfo from '@/src/components/LectureDetail/LectureInfo';
import LecturePicsCarousel from '@/src/components/LectureDetail/LecturePicsCarousel';
import LocationInfo from '@/src/components/LectureDetail/LocationInfo';
import { LectureDetailProps } from '@/src/navigators/LectureStack/types';
import { ScrollView } from 'react-native';
import { LectureDetailScreenStyle as styles } from './styles';
import LectureReview from '@/src/components/LectureDetail/LectureReview';

const LectureDetailScreen = ({ navigation, route }: LectureDetailProps) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 강의 사진 캐러셀 */}
      <LecturePicsCarousel />
      {/* 강의 정보/ 제목/태그/가격/강의설명 */}
      <LectureInfo />
      {/* 강사 프로필 */}
      <InstructorProfile />
      {/* 위치 정보, 지도 */}
      <LocationInfo />
      {/* 부가서비스, 주차가능, 그룹, 장비대여 여부  */}
      <AdditionalService />
      {/* 후기보기 영역 */}
      <LectureReview />
      {/* 예약하기 버튼 position:fixed */}
    </ScrollView>
  );
};

export default LectureDetailScreen;
