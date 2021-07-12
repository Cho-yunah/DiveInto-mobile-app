import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState } from 'recoil';

import { datePickerStyles as styles } from './styles';
import { DatePickerModalProps } from './types';
import { birthState } from '@/src/recoil/LoginStack';

function CustomDatePicker() {
  const [date, setDate] = useRecoilState(birthState);
  const [show, setShow] = useState(false);
  const [complete, setComplete] = useState(false);

  const modalOpen = () => (setShow(true), setComplete(false));
  const onComplete = () => (setComplete(true), onOutPress());
  const onOutPress = () => setShow(false);
  const onDateChange = (date: Date) => setDate(date);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={modalOpen}
      style={styles.dateInputContainer}
    >
      <Text style={[styles.dateText, complete && styles.activeDateText]}>
        {date === null ? '생년월일' : moment(date).format('YYYY / MM / DD')}
      </Text>
      <AntDesign name={show ? 'caretup' : 'caretdown'} size={12} />

      {/* 모달 */}
      <DatePickerModal
        show={show}
        onOutPress={onOutPress}
        onComplete={onComplete}
        date={date}
        onDateChange={onDateChange}
      />
    </TouchableOpacity>
  );
}

const DatePickerModal = ({
  show,
  onComplete,
  onOutPress,
  date,
  onDateChange,
}: DatePickerModalProps) => (
  <Modal
    transparent
    animationType="slide"
    visible={show}
    supportedOrientations={['portrait']}
  >
    <TouchableWithoutFeedback onPress={onOutPress}>
      <View style={styles.modalContainer}>
        {/* 헤더 */}
        <View style={styles.modalHeaderContainer}>
          <TouchableOpacity onPress={onComplete}>
            <Text style={styles.modalHeaderText}>완료</Text>
          </TouchableOpacity>
        </View>
        {/* content */}
        <View style={styles.datePickerLayout}>
          <DatePicker
            style={styles.datePickerStyle}
            date={date ?? new Date()}
            mode="date"
            minimumDate={
              new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))
            }
            maximumDate={
              new Date(moment().add(120, 'years').format('YYYY-MM-DD'))
            }
            locale="ko"
            onDateChange={onDateChange}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default CustomDatePicker;
