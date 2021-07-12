import { ReserveLectureProps } from '@/src/navigators/LectureStack/types';
import React, { useLayoutEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import {
  LectureCalendar,
  SelectStudentsNumber,
  SelectLectureSchedule,
  RentEquipments,
  ReserveBtn,
} from '@components/ReserveLecture';
import { Suspense } from 'react';
import SuspenseCalendar from '@/src/components/ReserveLecture/SuspenseCalendar';

const index = ({ navigation }: ReserveLectureProps) => {
  const navigateToRequestPayment = () => navigation.navigate('RequestPayment');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ReserveBtn navigateToRequestPayment={navigateToRequestPayment} />
      ),
    });
  }, []);

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Suspense fallback={<SuspenseCalendar />}>
          {/* 달력 */}
          <LectureCalendar />
        </Suspense>
        {/* 인원선택 */}
        <SelectStudentsNumber />
        {/* 일정선택 */}
        <SelectLectureSchedule />
        {/* 장비대여 */}
        <RentEquipments />
      </ScrollView>
    </>
  );
};

export default index;
