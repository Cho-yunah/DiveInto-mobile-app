import {
  getEquipmentsState,
  getTheSameClassScheduleState,
  requestReservationEquipmentDetailType,
  requestReservationEquipmentState,
} from '@/src/recoil/LectureStack';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { ReserveBtn as styles } from './styles';
import { ReserveBtnProps } from './types';

const ReserveBtn = ({
  navigateToRequestPayment,
  isDisabled,
  setIsDisabled,
}: ReserveBtnProps) => {
  const equipmentsState = useRecoilValue(getEquipmentsState(1)); // 강의 id -> 제공되는 대여장비, name,id, price
  const classSchedule = useRecoilValue(getTheSameClassScheduleState);
  const reservedEquipmentsArray: requestReservationEquipmentDetailType[] = [];
  equipmentsState.forEach(equip =>
    reservedEquipmentsArray.push(
      ...useRecoilValue(requestReservationEquipmentState(equip.id)),
    ),
  );
  const moveToRequestPayment = () => {
    if (
      !classSchedule.length ||
      classSchedule[0]?.currentNumber === classSchedule[0]?.maxNumber
    ) {
      setIsDisabled(true);
      return;
    }

    navigateToRequestPayment();
  };
  useEffect(() => {
    // 강의 일정, 학생수 => 있으면 ok,
    // 강의 없는 날 고르면 false -> classSchedule이 빈배열
  }, [classSchedule]);

  return (
    <TouchableOpacity
      style={{
        marginRight: 10,
      }}
      onPress={() => moveToRequestPayment()}
      disabled={isDisabled}
    >
      <Text style={isDisabled ? styles.headerBtnText : styles.headerBtnText}>
        다음
      </Text>
    </TouchableOpacity>
  );
};

export default ReserveBtn;
