import {
  cachingState,
  currMonthState,
  currScheduleIdState,
  currSelectedDateState,
  currYearState,
  lectureIdState,
  lectureScheduleListsSelector,
  markedDateState,
} from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const LectureCalendar = () => {
  const lectureId = useRecoilValue(lectureIdState);
  const ScheduleInfoLists = useRecoilValue(
    lectureScheduleListsSelector(lectureId!),
  );
  const [markedDate, setMarkedDate] = useRecoilState(markedDateState);
  const [currSelectedDate, setCurrSelectedDate] = useRecoilState(
    currSelectedDateState,
  );
  const setCaching = useSetRecoilState(cachingState);
  const setCurrScheduleId = useSetRecoilState(currScheduleIdState);
  const setCurrYear = useSetRecoilState(currYearState);
  const setCurrMonth = useSetRecoilState(currMonthState);

  useEffect(() => {
    if (currSelectedDate in markedDate)
      setCurrScheduleId(markedDate[currSelectedDate].scheduleId);
  }, [currSelectedDate]);

  useEffect(() => {
    if (ScheduleInfoLists.length)
      ScheduleInfoLists.forEach((schedule: any) => {
        const markedDatesObj: any = {};
        schedule.dateTimeInfos.forEach((s: any) => {
          markedDatesObj[s.date] = {
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
        setMarkedDate({ ...markedDate, ...markedDatesObj });
      });
  }, [ScheduleInfoLists]);

  useEffect(() => {
    return () => {
      // 선택한 일정의 수업 정보 배열 초기화를 위한 clean up
      const date = new Date();
      setCurrSelectedDate('');
      setCurrYear(date.getFullYear());
      setCurrMonth(date.getMonth() + 1);
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
