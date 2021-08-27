import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { AddScheduleProps } from '@navigators/MyLectureStack/types';

import { getInstanceATK } from '@lib/api/axios';

import LectureCalendar from '@legacy_cCommon/LectureCalendar';
import DatePicker from 'react-native-date-picker';
import NextButton from '@components/common/NextButton';
import { Modal } from '@components/common';

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

const TimeForEachDay = ({
  date,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
}: {
  date: string;
  startTime: string;
  endTime: string;
  setStartTime: (time: Date) => void;
  setEndTime: (time: Date) => void;
}) => {
  // const [startT, setStartT] = useState(startTime && new Date(startTime));
  // const [endT, setEndT] = useState(endTime && new Date(endTime));

  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] =
    useState<'강의 시작 시간' | '강의 종료 시간'>('강의 시작 시간');

  console.log('startTime : ', startTime);
  console.log('endTime : ', endTime);

  return (
    <>
      <View style={timeStyle.rootCon}>
        <Text style={timeStyle.dateText}>{date}</Text>
        <View style={timeStyle.timeRootCon}>
          <View style={timeStyle.eachTimeCon}>
            <Text>시작시간</Text>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(true);
                setTitle('강의 시작 시간');
              }}
              style={timeStyle.timeTextCon}
            >
              <Text>
                {startTime == ''
                  ? '시간선택'
                  : startTime.toTimeString().split(' ')[0]}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={timeStyle.eachTimeCon}>
            <Text>종료시간</Text>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(true);
                setTitle('강의 종료 시간');
              }}
              style={timeStyle.timeTextCon}
            >
              <Text>
                {endTime == ''
                  ? '시간선택'
                  : endTime.toTimeString().split(' ')[0]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        title={title}
        visible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <DatePicker
          mode="time"
          date={title === '강의 시작 시간' ? startTime : endTime}
          onDateChange={date => {
            console.log('date : ', date.toTimeString().split(' ')[0]);
            if (title === '강의 시작 시간') {
              setStartTime(date);
            } else {
              setEndTime(date);
            }
          }}
        />
      </Modal>
    </>
  );
};

const timeStyle = StyleSheet.create({
  rootCon: {
    backgroundColor: 'white',
    padding: 5,
    paddingLeft: 10,
  },
  dateText: { marginBottom: 5 },
  timeRootCon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  eachTimeCon: { flexDirection: 'row', paddingRight: 10 },
  timeTextCon: {
    width: 100,
    borderWidth: 1,
    marginLeft: 5,
    alignItems: 'center',
    borderColor: '#40BBF2',
    borderRadius: 5,
  },
});
