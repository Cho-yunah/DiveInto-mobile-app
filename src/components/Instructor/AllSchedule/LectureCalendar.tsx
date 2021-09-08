import {
  cachingState,
  cachingStateFormClassScheduleState,
  currMonthState,
  currSelectedDateState,
  currYearState,
  lectureIdState,
  lectureScheduleListsSelector,
  markedDateState,
  scheduleIdObjState,
  schedulesByIdState,
} from '@recoil/Instructor/AllSchedule';

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { DateTimeInfoType, MarkedDatesType, ScheduleInfoType } from './types';

const LectureCalendar = () => {
  const lectureId = useRecoilValue(lectureIdState);
  const ScheduleInfoLists = useRecoilValue(
    lectureScheduleListsSelector(lectureId!),
  );
  const [markedDate, setMarkedDate] = useRecoilState(markedDateState);
  const setCurrSelectedDate = useSetRecoilState(currSelectedDateState);
  const setCaching = useSetRecoilState(cachingState);
  const setCurrYear = useSetRecoilState(currYearState);
  const setCurrMonth = useSetRecoilState(currMonthState);
  const setScheduleIdObj = useSetRecoilState(scheduleIdObjState);
  const setScheduleById = useSetRecoilState(schedulesByIdState);
  const setCachingSchedule = useSetRecoilState(
    cachingStateFormClassScheduleState,
  );

  useEffect(() => {
    console.log(ScheduleInfoLists, 'ScheduleInfoLists');

    if (ScheduleInfoLists?.length)
      ScheduleInfoLists.forEach((scheduleInfo: ScheduleInfoType) => {
        const newMarkedDates: MarkedDatesType = {};

        setScheduleById(scheduleById => [
          ...scheduleById,
          [
            {
              scheduleId: scheduleInfo.scheduleId,
              currentNumber: scheduleInfo.currentNumber,
              maxNumber: scheduleInfo.maxNumber,
            },
            scheduleInfo.dateTimeInfos,
          ],
        ]);
        scheduleInfo.dateTimeInfos.forEach((dateTimeInfo: DateTimeInfoType) => {
          // 같은 수업을 일정별로 담기 -> scheduleSelector에서 사용
          setScheduleIdObj(scheduleIdObj => {
            if (scheduleIdObj[dateTimeInfo.date])
              return {
                ...scheduleIdObj,
                [dateTimeInfo.date]: [
                  ...scheduleIdObj[dateTimeInfo.date],
                  scheduleInfo.scheduleId,
                ],
              };
            else
              return {
                ...scheduleIdObj,
                [dateTimeInfo.date]: [scheduleInfo.scheduleId],
              };
          });

          // 달력에 표시하는 일정 객체 만들기
          newMarkedDates[dateTimeInfo.date] = {
            selectedColor: '#50CAD2',
            selected: true,
            currentNumber: scheduleInfo.currentNumber,
            maxNumber: scheduleInfo.maxNumber,
            scheduleId: [scheduleInfo.scheduleId],
            scheduleDateTimeId: dateTimeInfo.scheduleDateTimeId,
            startTime: dateTimeInfo.startTime,
            endTime: dateTimeInfo.endTime,
            date: dateTimeInfo.date,
          };
        });
        setMarkedDate(markedDate => ({ ...markedDate, ...newMarkedDates }));
      });
  }, [ScheduleInfoLists]);

  useEffect(() => {
    return () => {
      // 선택한 일정의 수업 정보 배열 초기화를 위한 clean up
      const date = new Date();
      setCurrSelectedDate('');
      setCurrYear(date.getFullYear());
      setCurrMonth(date.getMonth() + 1);
      setMarkedDate({});
      setCaching(caching => caching + 1);
      setCachingSchedule(caching => caching + 1);
      setScheduleById([]);
    };
  }, []);

  return (
    <View style={{ backgroundColor: '#fefefe' }}>
      <Calendar
        theme={{
          backgroundColor: '#fefefe',
          calendarBackground: '#fefefe',
          arrowColor: '#207AB4',
        }}
        renderArrow={direction => {
          if (direction === 'left')
            return (
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color={'#207AB4'}
              />
            );
          else
            return (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={'#207AB4'}
              />
            );
        }}
        onMonthChange={monthInfo => {
          setCurrYear(monthInfo.year);
          setCurrMonth(monthInfo.month);
        }}
        minDate={new Date()}
        monthFormat={'yyyy' + '년 ' + 'MM' + '월'}
        onDayPress={day => {
          console.log(day);
          setCurrSelectedDate(day.dateString);
        }}
        markedDates={markedDate}
      />
    </View>
  );
};

export default LectureCalendar;
