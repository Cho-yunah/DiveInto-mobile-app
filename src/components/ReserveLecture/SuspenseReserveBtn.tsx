import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ReserveBtn as styles } from './styles';

const SuspenseReserveBtn = () => (
  <TouchableOpacity
    style={{
      marginRight: 10,
    }}
  >
    <Text style={styles.headerBtnText}>다음</Text>
  </TouchableOpacity>
);

export default SuspenseReserveBtn;
