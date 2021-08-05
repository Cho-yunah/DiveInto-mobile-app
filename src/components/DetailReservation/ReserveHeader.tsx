import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRecoilValue } from 'recoil';

import { RserveHeaderStyles as styles } from './styles';
import { sliceDateString } from '@lib/utils/sliceNewString';
import { reserveDetailListState } from '@recoil/ProfileStack';

export default function ReserveHeader() {
  const list = useRecoilValue(reserveDetailListState);
  const reserveDate = list?.dateOfReservation;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>예약확정</Text>
      <View style={styles.dateInfoContainer}>
        <FontAwesome name="exclamation-circle" size={16} color="#FEFEFE" />
        <Text style={styles.dateInfo}>
          {reserveDate &&
            `${sliceDateString(reserveDate, 'PPP')}에 예약이 완료되었습니다.`}
        </Text>
      </View>
    </View>
  );
}
