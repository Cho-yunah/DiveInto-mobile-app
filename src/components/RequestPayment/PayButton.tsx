import { getInstanceATK } from '@/src/lib/api/axios';
import {
  cachingState,
  cachingStateFormClassScheduleState,
  currScheduleIdState,
  currSelectedDateState,
  rentEquipmentInfosType,
  requestReservationEquipmentArrayState,
  reservationIdState,
  smallModalMessageState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import { ReserveLectureCachingState } from '@/src/recoil/ProfileStack';
import { PayButtonProps } from '@/src/screens/RequestPayment/types';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { payButton as styles } from './styles';

const PayButton = ({ setErrorMsg }: PayButtonProps) => {
  const currScheduleId = useRecoilValue(currScheduleIdState);
  const numberOfPeople = useRecoilValue(studentNumberState);
  const setCaching = useSetRecoilState(cachingState);
  const setCachingSchedule = useSetRecoilState(
    cachingStateFormClassScheduleState,
  );
  const setCurrSelectedDate = useSetRecoilState(currSelectedDateState);
  const reservingEquipmentArray = useRecoilValue(
    requestReservationEquipmentArrayState,
  );
  const setReservationId = useSetRecoilState(reservationIdState);
  // 프로필 Screen의 예약한 강의 Rerendering
  const setRefreshProfile = useSetRecoilState(ReserveLectureCachingState);

  console.log('이 페이지당');

  const [isLoading, setIsLoading] = useState(false);
  let flag = useRef(false);

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
      const { data }: AxiosResponse = await instanceAtk.post(
        '/reservation',
        body,
      );
      console.log(data);
      setErrorMsg('결제가 완료되었습니다.');
      setRefreshProfile(prev => prev + 1);

      flag.current = true;
      setReservationId(data.reservationId);
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
            reservingEquipmentArray.map(equip => ({
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
