import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { LectureInfoProps } from '@navigators/MyLectureStack/LectureInfoTab/types';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { CurrentTab } from '@recoil/Instructor/LectureInfo';
import {
  LectureIdList,
  LectureSchedule,
} from '@recoil/Instructor/AdmMyLecture';

import { getInstanceATK } from '@lib/api/axios';

import { Calendar, LocaleConfig } from 'react-native-calendars';
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

export function AllSchedule({ navigation, route }: LectureInfoProps) {
  const setCurrentTab = useSetRecoilState(CurrentTab);
  const lectureIdList = useRecoilValue(LectureIdList);
  useLayoutEffect(() => {
    navigation.addListener('focus', () => {
      console.log('전체일정 포커스');
      setCurrentTab('전체일정');
    });
  }, []);

  useLayoutEffect(() => {
    console.log('강의 id 리스트 : ', lectureIdList);

    const scheduleFetch = async () => {
      const schedule = await (
        await getInstanceATK()
      ).get('schedule', {
        params: {
          lectureId: 7,
          year: 2021,
          month: 1,
        },
      });
      console.log('schedule : ', schedule.data?._embedded?.scheduleInfoList);
    };
    scheduleFetch();
  }, [lectureIdList]);

  return (
    <View>
      <Text style={{ textAlign: 'right' }}>현재 강의에 대한 일정만 보기</Text>
      <Calendar
        markedDates={{
          '2021-08-14': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5f9ea0' },
              { startingDay: false, endingDay: true, color: '#ffa500' },
              { startingDay: true, endingDay: false, color: '#f0e68c' },
            ],
          },
          '2021-08-15': {
            periods: [
              { startingDay: true, endingDay: false, color: '#ffa500' },
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#f0e68c' },
            ],
          },
        }}
        markingType="multi-period"
      />
    </View>
  );
}
