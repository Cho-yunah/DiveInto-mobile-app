import React from 'react';
import { View, Text } from 'react-native';

import { ReserveUserOrCostStyles as styles } from './styles';
import EachCommonInfo from './EachCommonInfo';
export default function ReserveCost() {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>결제 정보</Text>
      <View style={styles.ineerContainer}>
        <EachCommonInfo name="상품 가격" userInfo="16,000원" type="cost" />
        <EachCommonInfo name="결제 수단" userInfo="휴대폰결제" type="cost" />
      </View>
    </View>
  );
}
