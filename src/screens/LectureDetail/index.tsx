import React from 'react';
import AdditionalService from '@/src/components/LectureDetail/AdditionalService';
import InstructorProfile from '@/src/components/LectureDetail/InstructorProfile';
import LectureInfo from '@/src/components/LectureDetail/LectureInfo';
import LecturePicsCarousel from '@/src/components/LectureDetail/LecturePicsCarousel';
import LocationInfo from '@/src/components/LectureDetail/LocationInfo';
import { LectureDetailProps } from '@/src/navigators/LectureStack/types';
import { ScrollView, TouchableOpacity } from 'react-native';
import { LectureDetailScreenStyle as styles } from './styles';
import LectureReview from '@/src/components/LectureDetail/LectureReview';
import ReserveBtn from '@/src/components/LectureDetail/LectureReview/ReserveBtn';
import { useLayoutEffect } from 'react';
import instance from '@/src/lib/api/axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  lectureDetailState,
  lectureInstructorProfileState,
} from '@/src/recoil/LectureStack';
import Entype from 'react-native-vector-icons/Entypo';

const LectureDetailScreen = ({ navigation, route }: LectureDetailProps) => {
  const setLectureDetail = useSetRecoilState(lectureDetailState);
  const { isMarked } = useRecoilValue(lectureDetailState);
  const setLectureInstructorProfile = useSetRecoilState(
    lectureInstructorProfileState,
  );
  useLayoutEffect(() => {
    const requestLectureDetail = async () => {
      try {
        const res = await instance.get(`/lecture?id=${1}`);
        const {
          id,
          title,
          classKind,
          organization,
          level,
          maxNumber,
          period,
          description,
          price,
          region,
          reviewTotalAvg,
          reviewCount,
          isMarked,
        } = res.data;
        setLectureDetail({
          id,
          title,
          classKind,
          organization,
          level,
          maxNumber,
          period,
          description,
          price,
          region,
          reviewTotalAvg,
          reviewCount,
          isMarked,
        });
      } catch (e) {
        console.log(e);
      }
    };

    requestLectureDetail();
  }, []);

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

  useLayoutEffect(() => {
    const requestInstructorProfile = async () => {
      try {
        const res = await instance.get(
          `/lecture/instructor/info/creator?lectureId=${1}`,
        );
        console.log(res);
        const { instructorId, nickName, selfIntroduction, profilePhotoUrl } =
          res.data;

        setLectureInstructorProfile({
          instructorId,
          nickName,
          selfIntroduction,
          profilePhotoUrl,
        });
      } catch (e) {
        console.log(e);
      }
    };

    requestInstructorProfile();
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
