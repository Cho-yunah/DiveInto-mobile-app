import React from 'react';
import AdditionalService from '@/src/components/LectureDetail/AdditionalService';
import InstructorProfile from '@/src/components/LectureDetail/InstructorProfile';
import LectureInfo from '@/src/components/LectureDetail/LectureInfo';
import LecturePicsCarousel from '@/src/components/LectureDetail/LecturePicsCarousel';
import LocationInfo from '@/src/components/LectureDetail/LocationInfo';
import LectureReview from '@/src/components/LectureDetail/LectureReview';
import ReserveBtn from '@/src/components/LectureDetail/LectureReview/ReserveBtn';
import { LectureDetailProps } from '@/src/navigators/LectureStack/types';
import { ScrollView, TouchableOpacity } from 'react-native';
import { LectureDetailScreenStyle as styles } from './styles';
import { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { lectureDetailState } from '@/src/recoil/LectureStack';
import Entype from 'react-native-vector-icons/Entypo';

const LectureDetailScreen = ({ navigation, route }: LectureDetailProps) => {
  const { isMarked } = useRecoilValue(lectureDetailState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
        >
          <Entype
            name={'heart'}
            size={24}
            color={isMarked ? '#E93A55' : '#E0E0E1'}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <>
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
      </ScrollView>
      {/* 예약하기 버튼 */}
      <ReserveBtn />
    </>
  );
};

export default LectureDetailScreen;
