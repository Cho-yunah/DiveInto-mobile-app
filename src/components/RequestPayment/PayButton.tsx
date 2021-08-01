import { getInstanceATK } from '@/src/lib/api/axios';
import {
  cachingState,
  cachingStateFormClassScheduleState,
  currScheduleIdState,
  currSelectedDateState,
  getEquipmentsState,
  lectureIdState,
  rentEquipmentInfosType,
  requestReservationEquipmentDetailType,
  requestReservationEquipmentState,
  schedulesByIdState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import { PayButtonProps } from '@/src/screens/RequestPayment/types';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { payButton as styles } from './styles';

const PayButton = ({ setErrorMsg }: PayButtonProps) => {
  const lectureId = useRecoilValue(lectureIdState);
  const equipmentsState = useRecoilValue(getEquipmentsState(lectureId!)); // 강의 id -> 제공되는 대여장비, name,id, price
  const reservedEquipmentsArray: requestReservationEquipmentDetailType[] = [];
  const currScheduleId = useRecoilValue(currScheduleIdState);
  const numberOfPeople = useRecoilValue(studentNumberState);
  const setCaching = useSetRecoilState(cachingState);
  const setCachingSchedule = useSetRecoilState(
    cachingStateFormClassScheduleState,
  );
  const setScheduleById = useSetRecoilState(schedulesByIdState);
  const setCurrSelectedDate = useSetRecoilState(currSelectedDateState);

  const [isLoading, setIsLoading] = useState(false);
  let flag = useRef(false);
  equipmentsState.forEach(equip =>
    reservedEquipmentsArray.push(
      ...useRecoilValue(requestReservationEquipmentState(equip.id)),
    ),
  );

  const requestReservation = async (
    rentEquipmentInfos: rentEquipmentInfosType[],
  ) => {
    setIsLoading(true);

    const body = {
      scheduleId: currScheduleId,
      numberOfPeople,
      rentEquipmentInfos,
    };
    try {
      const instanceAtk = await getInstanceATK();
      const { data } = await instanceAtk.post('/reservation', body);
      console.log(data);
      flag.current = true;
    } catch (e) {
      console.log(e.response.data);
      if (e.response.data.success === false) {
        setErrorMsg(e.response.data.msg);
        flag.current = true;
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      if (flag.current) {
        // 에러 발생해서 뒤로가기 할 경우 & 강의 예약이 성공한 경우 최신 강의정보(일정, 인원)를 다시 받아온다.
        // 에러 발생시 강의 일정 선택으로 보내기. 성공시 메인화면으로 보낸다.
        setCurrSelectedDate('');
        setCaching(cache => cache + 1);
        setCachingSchedule(cache => cache + 1);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() =>
          requestReservation(
            reservedEquipmentsArray.map(equip => ({
              scheduleEquipmentStockId: equip.scheduleEquipmentStockId,
              rentNumber: equip.rentNumber,
            })),
          )
        }
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fefefe" />
        ) : (
          <Text style={styles.buttonText}>결제하기</Text>
        )}
      </Pressable>
    </View>
  );
};

export default PayButton;
