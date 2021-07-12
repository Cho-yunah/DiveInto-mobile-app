import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GrayText } from '@config/colors';

import { Modal } from '@components/common';
import DatePicker from 'react-native-date-picker';
import { WheelPicker } from '@components/common';

export function GetLectureTime() {
  const [isVisible, setIsVisible] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const hours = Array.from({ length: 30 }, (v, i) => `${i}`);
  const minutes = Array.from({ length: 60 }, (v, i) => `${i}`);

  const onHourSelect = (value: string) => setHour(parseInt(value));
  const onMinuteSelect = (value: string) => setMinute(parseInt(value));

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      >
        <View style={[styles.container, styles.shadow]}>
          {hour || minute ? (
            <Text style={styles.selectText}>
              {hour !== 0 && hour + '시간'} {minute !== 0 && minute + '분'}
            </Text>
          ) : (
            <Text style={styles.unSelectText}>
              '총 강의 시간을 입력해주세요.'
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        title="강의 총 소요시간"
        visible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <WheelPicker
            itemList={hours}
            onSelect={onHourSelect}
            defaultIdx={hour}
          />
          <Text style={styles.modalText}>시간</Text>
          <WheelPicker
            itemList={minutes}
            onSelect={onMinuteSelect}
            defaultIdx={minute}
          />
          <Text style={styles.modalText}>분</Text>
        </View>
      </Modal>
    </>
  );
}

//setTime({ hour, minute })

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  unSelectText: {
    color: '#A3A4A4',
  },
  selectText: {
    color: 'black',
  },
  modalContainer: {
    flexDirection: 'row',
  },
  modalText: { alignSelf: 'center', paddingTop: 30 },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 3,
  },
});
