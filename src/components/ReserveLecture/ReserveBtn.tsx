import {
  getEquipmentsState,
  getTheSameClassScheduleState,
  requestReservationEquipmentDetailType,
  requestReservationEquipmentState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import React, { useRef } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { ReserveBtn as styles } from './styles';
import { ReserveBtnProps } from './types';

type FlagType = {
  [key: number]: boolean;
};

const ReserveBtn = ({
  navigateToRequestPayment,
  isDisabled,
  setIsDisabled,
  setModalMessage,
}: ReserveBtnProps) => {
  const equipmentsState = useRecoilValue(getEquipmentsState(1)); // 강의 id -> 제공되는 대여장비, name,id, price
  const classSchedule = useRecoilValue(getTheSameClassScheduleState);
  const studentNumber = useRecoilValue(studentNumberState); // 원하는 수강 인원
  const reservedEquipmentsArray: requestReservationEquipmentDetailType[] = [];
  let flag = useRef<FlagType>({});
  equipmentsState.forEach(equip => {
    const eachEquipmentArr = useRecoilValue(
      requestReservationEquipmentState(equip.id),
    );
    let sumOfEquip = 0;
    eachEquipmentArr.forEach(itemBySize => {
      sumOfEquip += itemBySize.rentNumber;
    });
    if (sumOfEquip > studentNumber) {
      flag.current[equip.id] = true;
    } else {
      flag.current[equip.id] = false;
    }
    reservedEquipmentsArray.push(...eachEquipmentArr);
  });

  const moveToRequestPayment = () => {
    if (
      !classSchedule.length ||
      classSchedule[0]?.currentNumber === classSchedule[0]?.maxNumber
    ) {
      setModalMessage('예약 가능한 일정을 선택해 주세요.');
      setIsDisabled(true);
      return;
    }
    const checkArr = [];

    for (const property in flag.current) {
      checkArr.push(flag.current[property]);
    }

    if (checkArr.length && checkArr.some(boolean => boolean === true)) {
      setModalMessage(
        '대여 장비수가 수강 인원을 초과하였습니다.' +
          '\n' +
          '다시 확인 해주세요.',
      );
      setIsDisabled(true);
      return;
    }

    navigateToRequestPayment();
  };

  return (
    <TouchableOpacity
      style={{
        marginRight: 10,
      }}
      onPress={() => moveToRequestPayment()}
      disabled={isDisabled}
    >
      <Text style={styles.headerBtnText}>다음</Text>
    </TouchableOpacity>
  );
};

export default ReserveBtn;
