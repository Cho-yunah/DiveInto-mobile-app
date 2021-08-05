import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

import { ReserveCommonStyles as styles } from './styles';
import EachCommonInfo from './EachCommonInfo';
import {
  reserveEquipmentsState,
  // sumOfSameListSelector,
} from '@recoil/ProfileStack';

export default function ReserveEquipmentInfo() {
  const detailEquipments = useRecoilValue(reserveEquipmentsState);
  // const equipmentList = useRecoilValue(sumOfSameListSelector);

  if (!detailEquipments.length) return null;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.title}>대여 장비 목록</Text>
      <View style={styles.ineerContainer}>
        {detailEquipments.map((el, index) => (
          <EachCommonInfo
            key={`equipment_${index + 1}`}
            name={el.equipmentName}
            userInfo={`${el.rentNumber}개`}
            type="costOrEquipment"
          />
        ))}
      </View>
    </View>
  );
}
