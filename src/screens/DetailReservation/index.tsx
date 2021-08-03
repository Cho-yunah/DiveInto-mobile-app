import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';

import { styles } from './styles';
import {
  ReserveHeader,
  ReserveInfoList,
  ReserveUser,
  ReserveCost,
  CancelBtn,
} from '@components/DetailReservation';
export default function DetailReservationScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 강의 예약 헤더 */}
      <ReserveHeader />

      {/* 예약한 강의 정보 (장비, 위치, 일정) */}
      <ReserveInfoList />

      {/* 예약자 정보 */}
      <ReserveUser />

      {/* 결제 정보 */}
      <ReserveCost />

      {/* 예약 취소 버튼 */}
      <CancelBtn />
    </ScrollView>
  );
}
