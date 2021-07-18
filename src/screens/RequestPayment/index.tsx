import {
  AboutReservationDetail,
  PayButton,
  TotalSumOfMoney,
} from '@/src/components/RequestPayment';
import { RequestPaymentProps } from '@/src/navigators/LectureStack/types';
import React from 'react';
import { useState } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { ModalContainer } from '../ReserveLecture';
import styles from './styles';

const index = ({ navigation }: RequestPaymentProps) => {
  const [errorMsg, setErrorMsg] = useState('');
  return (
    <View style={styles.container}>
      {/* 강의 제목, 예약 일정 내용, 대여장비 */}
      <AboutReservationDetail />
      {/* 금액 상세 수강료, 대여비, 결제 총 금액 */}
      <TotalSumOfMoney />
      {/* 결제하기 버튼 */}
      <PayButton setErrorMsg={setErrorMsg} />
      {!!errorMsg && (
        <>
          <Modal visible={!!errorMsg} transparent={true} animationType={'fade'}>
            <Pressable
              onPress={() => setErrorMsg('')}
              style={styles.modalOuterContainer}
            >
              <ModalContainer message={errorMsg} />
            </Pressable>
          </Modal>
        </>
      )}
    </View>
  );
};

export default index;
