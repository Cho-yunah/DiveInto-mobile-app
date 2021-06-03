import LecturePicsCarousel from '@/src/components/LectureDetail';
import { LectureDetailProps } from '@/src/navigators/LectureStack/types';
import React from 'react';
import { Text, View } from 'react-native';

const LectureDetailScreen = ({ navigation, route }: LectureDetailProps) => {
  return (
    <View>
      {/* 강의 사진 캐러셀 */}
      <LecturePicsCarousel />

      {/* 강의 정보/ 제목/태그/가격/강의설명 */}
      {/* 강사 정보 */}
      {/* 위치 정보, 지도 */}
      {/* 부가서비스, 주차가능, 그룹, 장비대여 여부  */}
      {/* 후기보기 영역 */}
      {/* 예약하기 버튼 position:fixed */}
      <Text>lecture detailScreen</Text>
    </View>
  );
};

export default LectureDetailScreen;
