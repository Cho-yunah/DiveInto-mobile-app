import {
  currScheduleIdState,
  getEquipmentsState,
  requestReservationEquipmentDetailType,
  requestReservationEquipmentState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import React, { Suspense } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { ReserveBtn as styles } from './styles';
import SuspenseReserveBtn from './SuspenseReserveBtn';
import { ReserveBtnProps } from './types';

const ReserveBtn = ({ navigateToRequestPayment }: ReserveBtnProps) => {
  const equipmentsState = useRecoilValue(getEquipmentsState(1)); // 강의 id -> 제공되는 대여장비, name,id, price
  const reservedEquipmentsArray: requestReservationEquipmentDetailType[] = [];
  equipmentsState.forEach(equip =>
    reservedEquipmentsArray.push(
      ...useRecoilValue(requestReservationEquipmentState(equip.id)),
    ),
  );

  return (
    <Suspense fallback={<SuspenseReserveBtn />}>
      <TouchableOpacity
        style={{
          marginRight: 10,
        }}
        onPress={() => navigateToRequestPayment()}
      >
        <Text style={styles.headerBtnText}>다음</Text>
      </TouchableOpacity>
    </Suspense>
  );
};

export default ReserveBtn;
