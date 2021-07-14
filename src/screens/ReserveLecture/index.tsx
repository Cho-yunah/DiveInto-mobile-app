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
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';

const index = ({ navigation }: ReserveLectureProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigateToRequestPayment = () => {
    navigation.navigate('RequestPayment');
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Suspense fallback={<SuspenseReserveBtn />}>
          <ReserveBtn
            navigateToRequestPayment={navigateToRequestPayment}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
            setModalMessage={setModalMessage}
          />
        </Suspense>
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
        <Modal visible={isDisabled} transparent={true} animationType={'fade'}>
          <Pressable
            onPress={() => setIsDisabled(false)}
            style={styles.modalOuterContainer}
          >
            <ModalContainer message={modalMessage} />
          </Pressable>
        </Modal>
      </ScrollView>
    </>
  );
};

export const ModalContainer = ({ message }: { message: string }) => (
  <SafeAreaView style={styles.modalContainer}>
    <Text style={styles.modalText}>{message}</Text>
  </SafeAreaView>
);

export default index;
