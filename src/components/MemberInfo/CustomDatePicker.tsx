import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

// root path
import styles from './styles';

function CustomDatePicker() {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);
  const [completeDate, setCompleteDate] = useState(false);

  console.log(date);

  const onChange = (e: any) => {
    setDate(moment(e)._d);
    setCompleteDate(true);
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => setShow(true)}>
      <View>
        <View style={styles.dateInputContainer}>
          <Text
            style={[
              styles.dateInputText,
              completeDate && styles.activeDateInputText,
            ]}
          >
            {date === null ? '생년월일' : moment(date).format('YYYY / MM / DD')}
          </Text>
          <Text
            style={[
              styles.dateInputText,
              completeDate && styles.activeDateInputText,
            ]}
          >
            <AntDesign name="caretdown" size={12} />
          </Text>
        </View>
      </View>
      <Modal
        transparent
        animationType="slide"
        visible={show}
        supportedOrientations={['portrait']}
        onRequestClose={() => setShow(false)}
      >
        <View style={styles.datePickerContainer}>
          <TouchableOpacity
            style={styles.modalClose}
            activeOpacity={1}
            onPress={() => setShow(false)}
          >
            <TouchableOpacity style={styles.datePickerContainer}>
              <View style={styles.datePickerBg}>
                <View style={styles.datePickerLayout}>
                  <DatePicker
                    style={{ width: 500 }}
                    date={date || new Date()}
                    mode="date"
                    minimumDate={
                      new Date(
                        moment().subtract(120, 'years').format('YYYY-MM-DD'),
                      )
                    }
                    maximumDate={
                      new Date(moment().add(120, 'years').format('YYYY-MM-DD'))
                    }
                    locale="ko"
                    onDateChange={onChange}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

export default CustomDatePicker;
