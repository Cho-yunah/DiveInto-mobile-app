import {
  cachingState,
  currMonthState,
  currScheduleIdState,
  currSelectedDateState,
  lectureScheduleListsSelector,
  markedDateState,
} from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const LectureCalendar = () => {
  const [currMonth, setCurrMonth] = useRecoilState(currMonthState);
  const ScheduleInfoLists = useRecoilValue(lectureScheduleListsSelector(1));
  const [markedDate, setMarkedDate] = useRecoilState(markedDateState);
  const [currSelectedDate, setCurrSelectedDate] = useRecoilState(
    currSelectedDateState,
  );
  const setCaching = useSetRecoilState(cachingState);
  const [currScheduleId, setCurrScheduleId] =
    useRecoilState(currScheduleIdState);

  useEffect(() => {
    if (currSelectedDate in markedDate)
      setCurrScheduleId(markedDate[currSelectedDate].scheduleId);
  }, [currSelectedDate]);

  useEffect(() => {
    if (ScheduleInfoLists.length)
      ScheduleInfoLists.forEach((schedule: any) => {
        const obj: any = {};
        schedule.dateTimeInfos.forEach((s: any) => {
          obj[s.date] = {
            selectedColor: '#50CAD2',
            selected: true,
            currentNumber: schedule.currentNumber,
            maxNumber: schedule.maxNumber,
            scheduleId: schedule.scheduleId,
            scheduleDateTimeId: s.scheduleDateTimeId,
            startTime: s.startTime,
            endTime: s.endTime,
            date: s.date,
          };
        });
        setMarkedDate({ ...markedDate, ...obj });
      });
  }, [ScheduleInfoLists]);

  useEffect(() => {
    return () => {
      // 선택한 일정의 수업 정보 배열 초기화를 위한 clean up
      setCurrSelectedDate('');
      setCurrMonth(new Date().getMonth() + 1);
      setCaching(caching => caching + 1);
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
          setCurrMonth(monthInfo.month);
        }}
        minDate={new Date()}
        monthFormat={'MM' + '월'}
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
