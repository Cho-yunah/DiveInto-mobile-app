import React, { useLayoutEffect, Suspense } from 'react';
import { ScrollView } from 'react-native';
import { LectureInfoProps } from '@navigators/MyLectureStack/LectureInfoTab/types';

import { useSetRecoilState } from 'recoil';
import { CurrentTab } from '@recoil/Instructor/LectureInfo';
// import {
//   LectureIdList,
//   LectureSchedule,
// } from '@recoil/Instructor/AdmMyLecture';

// import { getInstanceATK } from '@lib/api/axios';

import { LocaleConfig } from 'react-native-calendars';

import {
  LectureCalendar,
  SelectLectureSchedule,
  SuspenseCalendar,
} from '@components/Instructor/AllSchedule';

/**
 * 달력 환경 설정
 */
LocaleConfig.locales.kr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1.',
    '2.',
    '3',
    '4',
    '5',
    '6',
    '7.',
    '8',
    '9.',
    '10.',
    '11.',
    '12.',
  ],
  dayNames: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  dayNamesShort: ['월.', '화.', '수.', '목.', '금.', '토.', '일.'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';

export function AllSchedule() {
  // const setCurrentTab = useSetRecoilState(CurrentTab);

  // useLayoutEffect(() => {
  //   navigation.addListener('focus', () => {
  //     console.log('전체일정 포커스');
  //     setCurrentTab('전체일정');
  //   });
  // }, []);

  return (
    <ScrollView>
      {/* <Text style={{ textAlign: 'right' }}>현재 강의에 대한 일정만 보기</Text> */}

      {/* 달력 */}
      <Suspense fallback={<SuspenseCalendar />}>
        <LectureCalendar />
      </Suspense>

      {/* 일정선택 */}
      <SelectLectureSchedule />
    </ScrollView>
  );
}
