import {
  currScheduleIdState,
  reservationEquipmentObjState,
  selectedClassByIdSelector,
  smallModalMessageState,
  studentNumberState,
  requestReservationEquipmentDetailType,
  requestReservationEquipmentArrayState,
} from '@/src/recoil/LectureStack';
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ReserveBtn as styles } from './styles';
import { ReserveBtnProps } from './types';

type FlagType = {
  [key: number]: boolean;
};

const ReserveBtn = ({ navigateToRequestPayment }: ReserveBtnProps) => {
  const [smallModalMessage, setSmallModalMessage] = useRecoilState(
    smallModalMessageState,
  );
  const scheduleId = useRecoilValue(currScheduleIdState);

  const classSchedule = useRecoilValue(selectedClassByIdSelector);
  const studentNumber = useRecoilValue(studentNumberState); // 원하는 수강 인
  const selectedEquipmentsObj = useRecoilValue(reservationEquipmentObjState);
  const setRequestReservationEquipmentArray = useSetRecoilState(
    requestReservationEquipmentArrayState,
  );

  let flag = useRef<FlagType>({});

  const moveToRequestPayment = () => {
    if (
      !classSchedule.length ||
      classSchedule[0]?.currentNumber === classSchedule[0]?.maxNumber
    ) {
      setSmallModalMessage('예약 가능한 일정을 선택해 주세요.');
      return;
    }

    for (const equipmentId in flag.current) {
      if (flag.current && flag.current[equipmentId] === true) {
        setSmallModalMessage(
          '대여 장비수가 수강 인원을 초과하였습니다.' +
            '\n' +
            '다시 확인 해주세요.',
        );
        return;
      }
    }

    navigateToRequestPayment();
  };

  useEffect(() => {
    let reservingEquipsArray: requestReservationEquipmentDetailType[] = [];
    const currSelectedEquipmentsObj = { ...selectedEquipmentsObj };

    for (const equipmentId in currSelectedEquipmentsObj) {
      let sumOfEquip = 0;

      for (const equipmentStockId in currSelectedEquipmentsObj[equipmentId]
        .equipmentStocks) {
        const {
          scheduleEquipmentStockId,
          rentNumber,
          size,
          price,
          totalRentNumber,
          quantity,
          name,
        } =
          currSelectedEquipmentsObj[equipmentId].equipmentStocks[
            equipmentStockId
          ];

        sumOfEquip += rentNumber;

        reservingEquipsArray = [
          ...reservingEquipsArray,
          {
            scheduleEquipmentStockId,
            rentNumber,
            size,
            price,
            totalRentNumber,
            quantity,
            name,
          },
        ];
      }

      if (sumOfEquip > studentNumber) flag.current[equipmentId] = true;
      else flag.current[equipmentId] = false;
    }
    setRequestReservationEquipmentArray(reservingEquipsArray);
  }, [selectedEquipmentsObj]);

  useEffect(() => {
    flag.current = {};
  }, [scheduleId]);

  return (
    <TouchableOpacity
      style={{
        marginRight: 10,
      }}
      onPress={() => moveToRequestPayment()}
      disabled={!!smallModalMessage}
    >
      <Text style={styles.headerBtnText}>다음</Text>
    </TouchableOpacity>
  );
};

export default ReserveBtn;
