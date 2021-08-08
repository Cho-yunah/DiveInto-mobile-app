import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

import { ReserveScheduleStyles as styles } from './styles';
import { EachScheduleInfoProps, StartOrEndScheduleInfoProps } from './types';
import { dateOrTimeOfNewStringSelector } from '@/src/recoil/ProfileStack';

// 예약한 강의 관련 모든 일정 View
export default function ReserveSchedule() {
  const scheduleList = useRecoilValue(dateOrTimeOfNewStringSelector);

  if (!scheduleList?.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>예약 일정</Text>
      {scheduleList.map((el, index) => (
        <EachScheduleInfo
          key={`${el.date}_${index + 1}`}
          startTime={el.startTime}
          endTime={el.endTime}
          date={el.date}
          round={index}
        />
      ))}
    </View>
  );
}

// 예약한 강의에서 하루 일정을 보여주는 View
function EachScheduleInfo({
  startTime,
  endTime,
  date,
  round,
}: EachScheduleInfoProps) {
  return (
    <View style={styles.outerContainer}>
      <StartOrEndScheduleInfo
        scheduleType="start"
        date={date}
        time={startTime}
      />
      <View style={styles.ceterRountTextContainer}>
        <Text style={styles.roundText}>{`${round + 1}회`}</Text>
      </View>
      {/* <View style={styles.centerLine}></View> */}
      <StartOrEndScheduleInfo scheduleType="end" date={date} time={endTime} />
    </View>
  );
}

// 예약한 강의 시작 시간, 끝나는 시간 보여주는 View
function StartOrEndScheduleInfo({
  scheduleType,
  date,
  time,
}: StartOrEndScheduleInfoProps) {
  const title = scheduleType === 'start' ? '시작 일정' : '마무리 일정';

  return (
    <View style={styles.innerContainer}>
      {/* <Text style={styles.scheduleTitle}>{title}</Text> */}
      <Text style={styles.dateOrTimeText}>{date}</Text>
      <Text style={styles.dateOrTimeText}>{time}</Text>
    </View>
  );
}
