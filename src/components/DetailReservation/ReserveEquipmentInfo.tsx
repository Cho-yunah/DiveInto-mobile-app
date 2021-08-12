import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

import { ReserveCommonStyles as styles } from './styles';
import EachCommonInfo from './EachCommonInfo';
import { sumOfTheSameListSelector } from '@recoil/ProfileStack';

export default function ReserveEquipmentInfo() {
  const detailEquipments = useRecoilValue(sumOfTheSameListSelector);

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
            size={el.size}
            type="equipment"
          />
        ))}
      </View>
    </View>
  );
}
