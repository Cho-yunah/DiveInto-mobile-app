import React from 'react';
import { Text, View } from 'react-native';
import { aboutReservationDetail as styles } from './styles';
import getDuration from '@/src/lib/utils/getDuaration';
import { DateTimeInfoType } from '../ReserveLecture/types';

const EachSchedule = ({ item }: { item: DateTimeInfoType }) => {
  const date = item.date.split('-');
  const startTime = item.startTime.split(':');
  const endTime = item.endTime.split(':');
  const durationHour = +endTime[0] - +startTime[0];
  const durationMin = +endTime[1] - +startTime[1];

  return (
    <View style={styles.eachScheduleContainer}>
      <Text>
        {date[0]}년 {date[1]}월 {date[2]}일
      </Text>
      <View style={styles.timeContainer}>
        <Text>
          {startTime[0]} : {startTime[1]} ~ {endTime[0]} : {endTime[1]}{' '}
        </Text>
        <Text style={styles.timeText}>
          ( {getDuration(durationHour, durationMin)} )
        </Text>
      </View>
    </View>
  );
};

export default EachSchedule;
