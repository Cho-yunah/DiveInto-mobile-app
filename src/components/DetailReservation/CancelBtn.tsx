import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { CancelBtnStyles as styles } from './styles';
function CancelBtn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>예약취소</Text>
      <Text style={styles.cancelNotice}>
        수강 일자로부터 2일 전까지만 취소할 수 있습니다.
      </Text>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>예약취소</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CancelBtn;
