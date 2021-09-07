import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Modal } from '@components/common';

export const TimeForEachDay = ({
  date,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
}: {
  date: string;
  startTime: '' | Date;
  endTime: '' | Date;
  setStartTime: (time: Date) => void;
  setEndTime: (time: Date) => void;
}) => {
  // const [startT, setStartT] = useState(startTime && new Date(startTime));
  // const [endT, setEndT] = useState(endTime && new Date(endTime));

  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState<'강의 시작 시간' | '강의 종료 시간'>(
    '강의 시작 시간',
  );

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
