import {
  AboutReservationDetail,
  PayButton,
  TotalSumOfMoney,
} from '@/src/components/RequestPayment';
import { RequestPaymentProps } from '@/src/navigators/LectureStack/types';
import { smallModalMessageState } from '@/src/recoil/LectureStack';
import React from 'react';
import { View } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { AlertModal } from '../ReserveLecture';
import styles from './styles';

const index = ({ navigation }: RequestPaymentProps) => {
  const setErrorMsg = useSetRecoilState(smallModalMessageState);
  return (
    <View style={styles.container}>
      {/* 강의 제목, 예약 일정 내용, 대여장비 */}
      <AboutReservationDetail />
      {/* 금액 상세 수강료, 대여비, 결제 총 금액 */}
      <TotalSumOfMoney />
      {/* 결제하기 버튼 */}
      <PayButton setErrorMsg={setErrorMsg} />
      <AlertModal />
    </View>
  );
};

export default index;
