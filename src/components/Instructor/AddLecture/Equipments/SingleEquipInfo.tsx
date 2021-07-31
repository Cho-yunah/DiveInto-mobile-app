import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { GetInput } from './GetInput';
import { SizeInput } from './SizeInput';

import { useRecoilState } from 'recoil';
import { EquipmentList } from '@recoil/Instructor/AddLecture';

export const SingleEquipInfo = ({ idx }: { idx: number }) => {
  const [equipInfo, setEquipInfo] = useRecoilState(EquipmentList(idx));

  const onNameInput = (name: string) => setEquipInfo({ ...equipInfo, name });
  const onPriceInput = (price: string) =>
    setEquipInfo({ ...equipInfo, price: parseInt(price) });

  const onNewSizePress = () =>
    setEquipInfo({
      ...equipInfo,
      equipmentStockInfos: equipInfo.equipmentStockInfos.concat({
        size: '',
        quantity: 0,
      }),
    });
  const onRemoveSizePress = (rmIdx: number) =>
    setEquipInfo({
      ...equipInfo,
      equipmentStockInfos:
        equipInfo.equipmentStockInfos.length > 1
          ? equipInfo.equipmentStockInfos
              .slice(0, rmIdx)
              .concat(equipInfo.equipmentStockInfos.slice(rmIdx + 1))
          : [{ size: '', quantity: 0 }],
    });

  const SizeList = equipInfo.equipmentStockInfos.map((info, idx) => {
    const onSizeInput = (size: string) => {
      console.log('equipInfo : ', equipInfo);
      setEquipInfo({
        ...equipInfo,
        equipmentStockInfos: equipInfo.equipmentStockInfos
          .slice(0, idx)
          .concat({
            size,
            quantity: equipInfo.equipmentStockInfos[idx].quantity,
          })
          .concat(equipInfo.equipmentStockInfos.slice(idx + 1)),
      });
    };

    const onQuantityInput = (quantity: number) => {
      console.log('equipInfo : ', equipInfo);
      setEquipInfo({
        ...equipInfo,
        equipmentStockInfos: equipInfo.equipmentStockInfos
          .slice(0, idx)
          .concat({
            size: equipInfo.equipmentStockInfos[idx].size,
            quantity,
          })
          .concat(equipInfo.equipmentStockInfos.slice(idx + 1)),
      });
    };

    return (
      <SizeInput
        idx={idx}
        sizeInfo={info}
        onRemoveSizePress={onRemoveSizePress}
        onSizeInput={onSizeInput}
        onQuantityInput={onQuantityInput}
      />
    );
  });

  return (
    <View style={[styles.equipContainer, styles.shadow]}>
      <GetInput
        onChange={onNameInput}
        placeholder="장비명을 입력하세요."
        containerStyle={styles.textInputContainer}
      />

      <GetInput
        onChange={onPriceInput}
        placeholder="대여료를 입력하세요."
        containerStyle={styles.textInputContainer}
        keyboardType="number-pad"
      />
      {SizeList}
      <TouchableOpacity style={{ marginLeft: 5 }} onPress={onNewSizePress}>
        <Text>사이즈 추가</Text>
      </TouchableOpacity>
    </View>
  );
};
