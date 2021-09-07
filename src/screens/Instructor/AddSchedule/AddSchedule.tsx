import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';

import { AddScheduleProps } from '@navigators/MyLectureStack/types';

import { getInstanceATK } from '@lib/api/axios';

import LectureCalendar from '@legacy_cCommon/LectureCalendar';
import NextButton from '@components/common/NextButton';

import { TimeForEachDay } from './TimeForEachDay';

export function AddSchedule({ navigation, route }: AddScheduleProps) {
  // 달력 컴포넌트에서 선택된 날짜 배열 저장용 상태
  const [dates, setDates] = useState([]); // ['2020-02-01', '2020-02-02'];
  const [datesWithTime, setDatesWithTime] =
    useState<{ date: string; startTime: Date | ''; endTime: Date | '' }[]>();

  useLayoutEffect(() => {
    const onPress = async () => {
      const instance = await getInstanceATK();
      try {
        const res = await instance.post('/schedule', {
          lectureId: route.params.lectureId,
          dateTimeCreateInfos: datesWithTime?.map(info => ({
            date: info.date,
            startTime: info.startTime?.toTimeString().split(' ')[0],
            endTime: info.endTime?.toTimeString().split(' ')[0],
          })),
        });

        if (res.status === 201) console.log('일정 추가 성공');
        else throw new Error('일정추가 오류');

        navigation.goBack();
      } catch (e) {
        console.log('일정 추가 오류');
      }
    };

    navigation.setOptions({
      headerRight: () => <NextButton onPress={onPress} text="완료" disable />,
    });
  }, [datesWithTime]);

  const onDateSelct = dates => {
    console.log('선택된 날짜 : ', dates);
    setDates(
      dates.sort((a: string, b: string) => {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      }),
    );
  };

  useEffect(() => {
    setDatesWithTime(dates.map(date => ({ date, startTime: '', endTime: '' })));
  }, [dates]);

  return (
    <ScrollView>
      <LectureCalendar onDateSelct={onDateSelct} />
      {datesWithTime &&
        datesWithTime.map((date, idx) => (
          <TimeForEachDay
            date={date.date}
            startTime={date.startTime}
            endTime={date.endTime}
            setStartTime={time => {
              const updated = [...datesWithTime];
              updated[idx].startTime = time;
              setDatesWithTime(updated);
            }}
            setEndTime={time => {
              const updated = [...datesWithTime];
              updated[idx].endTime = time;
              setDatesWithTime(updated);
            }}
          />
        ))}
    </ScrollView>
  );
}
