import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSetRecoilState } from 'recoil';

import { styles } from './styles';
import { DetailReservationProps } from '@navigators/ProfileStack/types';
import { getInstanceATK } from '@lib/api/axios';
import {
  ReserveHeader,
  ReserveLocationInfo,
  ReserveSchedule,
  ReserveEquipmentInfo,
  ReserveUser,
  ReserveCost,
  CancelBtn,
} from '@components/DetailReservation';
import {
  reserveDetailListState,
  reserveScheduleState,
  reserveEquipmentsState,
  reserveLocationState,
} from '@recoil/ProfileStack';
import CommonLoading from '@components/common/CommonLoading';

export default function DetailReservationScreen({
  route,
}: DetailReservationProps) {
  const { reservationId } = route.params;
  const setReserveDetailList = useSetRecoilState(reserveDetailListState);
  const setReserveSchedule = useSetRecoilState(reserveScheduleState);
  const setDetailLocation = useSetRecoilState(reserveLocationState);
  const setDetailEquipments = useSetRecoilState(reserveEquipmentsState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestReservationDetail = async () => {
      const instanceATK = await getInstanceATK();

      try {
        setIsLoading(true);
        const { data: info } = await instanceATK.get(
          `/reservation?reservationId=${reservationId}`,
        );

        const { data: location } = await instanceATK.get(
          `/reservation/location?reservationId=${reservationId}`,
        );

        const { data: schedule } = await instanceATK.get(
          `/reservation/schedule?reservationId=${reservationId}`,
        );

        const { data: equipment } = await instanceATK.get(
          `/reservation/equipment/list?reservationId=${reservationId}`,
        );

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

        console.log(schedule._embedded.scheduleDetailList);
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };

    requestReservationDetail();
  }, []);

  if (isLoading) {
    return <CommonLoading />;
  }

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
      <CancelBtn />
    </ScrollView>
  );
}
