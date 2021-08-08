import React from 'react';
import { View, Text } from 'react-native';

import { ReserveCommonStyles as styles } from './styles';
import EachCommonInfo from './EachCommonInfo';
import { useRecoilValue } from 'recoil';
import {
  reserveDetailListState,
  totalCostSelector,
} from '@recoil/ProfileStack';
import addCashComma from '@lib/utils/addCashComma';
export default function ReserveCost() {
  const totalCost = useRecoilValue(totalCostSelector('total'));
  const lectureCost = useRecoilValue(totalCostSelector('lecture'));
  const equipmentCost = useRecoilValue(totalCostSelector('equipment'));

  const conditionCost = equipmentCost ? (
    <EachCommonInfo
      name="장비 대여 가격"
      userInfo={`${addCashComma(equipmentCost)}원`}
      type="costOrEquipment"
    />
  ) : null;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>결제 정보</Text>
      <View style={styles.ineerContainer}>
        <EachCommonInfo
          name="상품 가격"
          userInfo={`${addCashComma(lectureCost)}원`}
          type="costOrEquipment"
        />
        {conditionCost}
        <EachCommonInfo
          name="총 가격"
          userInfo={`${addCashComma(totalCost)}원`}
          type="costOrEquipment"
          emphasis
        />
      </View>
    </View>
  );
}
