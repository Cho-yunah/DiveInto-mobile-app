import { ReserveLectureProps } from '@/src/navigators/LectureStack/types';
import React, { useLayoutEffect, useState, Suspense } from 'react';
import { Modal, Pressable, ScrollView, Text } from 'react-native';
import styles from './styles';
import {
  LectureCalendar,
  SelectStudentsNumber,
  SelectLectureSchedule,
  RentEquipments,
  ReserveBtn,
} from '@components/ReserveLecture';
import SuspenseCalendar from '@/src/components/ReserveLecture/SuspenseCalendar';
import SuspenseReserveBtn from '@/src/components/ReserveLecture/SuspenseReserveBtn';
import { useRecoilState } from 'recoil';
import { smallModalMessageState } from '@/src/recoil/LectureStack';
import { View } from 'react-native-animatable';

const index = ({ navigation }: ReserveLectureProps) => {
  const navigateToRequestPayment = () => {
    navigation.navigate('RequestPayment');
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Suspense fallback={<SuspenseReserveBtn />}>
          <ReserveBtn navigateToRequestPayment={navigateToRequestPayment} />
        </Suspense>
      ),
    });
  }, []);

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* 달력 */}
        <Suspense fallback={<SuspenseCalendar />}>
          <LectureCalendar />
        </Suspense>
        {/* 인원선택 */}
        <SelectStudentsNumber />
        {/* 일정선택 */}
        <SelectLectureSchedule />
        {/* 장비대여 */}
        <RentEquipments />

        {/* 모달 */}
        <AlertModal />
      </ScrollView>
    </>
  );
};

export const AlertModal = () => {
  const [smallModalMessage, setSmallModalMessage] = useRecoilState(
    smallModalMessageState,
  );
  return (
    <Modal
      visible={!!smallModalMessage}
      transparent={true}
      animationType={'fade'}
    >
      <Pressable
        onPress={() => setSmallModalMessage('')}
        style={styles.modalOuterContainer}
      ></Pressable>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>{smallModalMessage}</Text>
      </View>
    </Modal>
  );
};

export default index;
