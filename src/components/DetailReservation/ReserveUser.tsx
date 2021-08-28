import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { ReserveCommonStyles as styles } from './styles';
import EachCommonInfo from './EachCommonInfo';
import { useRecoilValue } from 'recoil';
import { reserveDetailListState } from '@recoil/ProfileStack/store';

export default function ReserveUser() {
  const list = useRecoilValue(reserveDetailListState);
  const numberOfPeople = list?.numberOfPeople;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>예약자 정보</Text>
      <View style={styles.ineerContainer}>
        <EachCommonInfo name="예약번호" userInfo="12341" type="user" />
        <EachCommonInfo name="예약자 이름" userInfo="홍길동" type="user" />
        <EachCommonInfo
          name="인원 수"
          userInfo={numberOfPeople ? `${numberOfPeople}명` : 0}
          type="user"
        />
      </View>
    </View>
  );
}
