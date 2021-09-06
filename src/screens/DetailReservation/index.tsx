import React, { useEffect, useLayoutEffect } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { styles } from './styles';
import { DetailReservationProps } from '@navigators/AttendeeScheduleStack/types';
import {
  ReserveHeader,
  ReserveLocationInfo,
  ReserveSchedule,
  ReserveEquipmentInfo,
  ReserveUser,
  ReserveCost,
  CancelBtn,
} from '@components/DetailReservation';
import AutoCloseAlertModal from '@components/common/AutoCloseAlertModal';
import {
  reserveDetailListState,
  reserveScheduleState,
  reserveEquipmentsState,
  reserveLocationState,
} from '@recoil/ProfileStack/store';
import { reserveDetailMultipleEval } from '@recoil/ProfileStack/dataFetch';
import withSuspense from '@lib/HOC/withSuspense';

function DetailReservationScreen({
  navigation,
  route,
}: DetailReservationProps) {
  const { reservationId, navigateToHome } = route.params;
  const setReserveDetailList = useSetRecoilState(reserveDetailListState);
  const setReserveSchedule = useSetRecoilState(reserveScheduleState);
  const setDetailLocation = useSetRecoilState(reserveLocationState);
  const setDetailEquipments = useSetRecoilState(reserveEquipmentsState);
  const { info, location, schedule, equipment } = useRecoilValue(
    reserveDetailMultipleEval(reservationId),
  );

  useLayoutEffect(() => {
    console.log(navigateToHome);
    if (!!navigateToHome)
      navigation.setOptions({
        headerRight: () => (
          <Pressable style={{ marginRight: 10 }} onPress={navigateToHome}>
            <Text style={{ color: '#F5DAAC', fontSize: 16 }}>확인</Text>
          </Pressable>
        ),
      });
  }, [navigateToHome]);

  useEffect(() => {
    if (equipment._embedded) {
      console.log('장비 있음');
      setDetailEquipments(equipment._embedded.rentEquipmentDetailList);
    } else {
      console.log('장비 없음');
      setDetailEquipments([]);
    }

    setReserveDetailList(info);
    setReserveSchedule(schedule._embedded.scheduleDetailList);
    setDetailLocation(location);
  }, [info, location, schedule, equipment]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 강의 예약 헤더 */}
      <ReserveHeader />

      {/* 예약한 강의 위치 */}
      <ReserveLocationInfo />

      {/* 강의 일정 정보 */}
      <ReserveSchedule />

      {/* 예약자 정보 */}
      <ReserveUser />

      {/* 예약한 강의에서 사용하는 장비 대여 목록 */}
      <ReserveEquipmentInfo />

      {/* 결제 정보 */}
      <ReserveCost />

      {/* 예약 취소 버튼 */}
      <CancelBtn reservationId={reservationId} />

      {/* 사용자 가이드 안내문 */}
      <AutoCloseAlertModal callerName="detailReservation" />
    </ScrollView>
  );
}

export default withSuspense(DetailReservationScreen);
