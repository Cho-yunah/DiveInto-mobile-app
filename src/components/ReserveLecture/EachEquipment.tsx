import React, { Suspense, useEffect, useState } from 'react';
import {
  eachEquipmentState,
  requestReservationEquipmentState,
  selectedEquipmentsIdState,
} from '@/src/recoil/LectureStack';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { View, TouchableOpacity, Text } from 'react-native';
import { RentEquipments as styles } from './styles';
import addCashComma from '@/src/lib/utils/addCashComma';
import EachEquipController from './EachEquipController';

const EachEquipment = ({ item, setIsOpen }: any) => {
  const [displayedPrice, setDisplayedPrice] = useState<number>(item.price);
  const selectedEquipments = useSetRecoilState(selectedEquipmentsIdState);
  const setEachEquipment = useSetRecoilState(eachEquipmentState(item.id));
  // 현재 장비중에 대여하고 싶은 물품 사이즈와 수량 담은 배열
  const [thisEquipmentArr, setThisEquipmentArr] = useRecoilState(
    requestReservationEquipmentState(item.id),
  );

  useEffect(() => {
    setEachEquipment({
      name: item.name,
      id: item.id,
      stocks: item.equipmentStocks,
    });

    // 한 대여 장비의 사이즈 별 대여 개수 정보 배열 cleanup effect
    return () => {
      console.log('장비 리스트 clean up EachEquipment.tsx');

      setThisEquipmentArr([]);
    };
  }, []);

  useEffect(() => {
    const priceUnit = item.price; // 1개당 가격
    let sum = 0;

    thisEquipmentArr.forEach(equip => {
      sum += equip.rentNumber;
    });

    setDisplayedPrice(sum * priceUnit);
  }, [thisEquipmentArr]);

  return (
    <Suspense
      fallback={
        <View>
          <Text>loading</Text>
        </View>
      }
    >
      <View style={styles.eachEquipmentContainer}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            selectedEquipments({ id: item.id, name: item.name });
            setIsOpen((state: boolean) => !state);
          }}
        >
          <View style={styles.itemName}>
            <Text style={styles.itemNameText}>{item.name}</Text>
          </View>
          <Text style={styles.selectSizeText}>사이즈를 선택해주세요</Text>
        </TouchableOpacity>
        <Text>{addCashComma(displayedPrice)} 원</Text>
      </View>
      <View>
        {thisEquipmentArr.map(equip => (
          <EachEquipController
            item={item}
            equip={equip}
            key={equip.scheduleEquipmentStockId}
          />
        ))}
      </View>
    </Suspense>
  );
};

export default EachEquipment;
