import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { RserveHeaderStyles as styles } from './styles';

export default function ReserveHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>예약확정</Text>
      <View style={styles.dateInfoContainer}>
        <FontAwesome name="exclamation-circle" size={16} color="#FEFEFE" />
        <Text style={styles.dateInfo}>
          2021년 8월 12일 14시 부터 이용가능합니다.
        </Text>
      </View>
    </View>
  );
}
