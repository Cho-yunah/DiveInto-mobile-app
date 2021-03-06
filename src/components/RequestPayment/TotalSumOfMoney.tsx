import addCashComma from '@/src/lib/utils/addCashComma';
import {
  lectureCommonSelectorFamily,
  requestReservationEquipmentArrayState,
  requestReservationEquipmentDetailType,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { totalSumOfMoney as styles } from './styles';

const TotalSumOfMoney = () => {
  const peopleNumber = useRecoilValue(studentNumberState);
  const { contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('Info'),
  );
  const reservingEquipmentArray = useRecoilValue(
    requestReservationEquipmentArrayState,
  );

  let rentalPrice = 0;

  reservingEquipmentArray.forEach(equip => {
    rentalPrice += equip.price * equip.rentNumber;
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.lecturePriceText}>
          프리다이빙 수강료 ( {peopleNumber}명 )
        </Text>
        <Text style={styles.lecturePriceText}>
          {addCashComma(contents.price * peopleNumber)} 원
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.rentalPriceText}>장비 대여료</Text>
        <Text style={styles.rentalPriceText}>
          {addCashComma(rentalPrice)} 원
        </Text>
      </View>
      <View style={styles.totalTextContainer}>
        <Text style={styles.totalText}>결제 총 금액</Text>
        <View style={styles.totalPriceTextcontainer}>
          <Text style={styles.totalPriceText}>
            {' '}
            {addCashComma(contents.price * peopleNumber + rentalPrice)}
          </Text>
          <Text>원</Text>
        </View>
      </View>
    </View>
  );
};

export default TotalSumOfMoney;
