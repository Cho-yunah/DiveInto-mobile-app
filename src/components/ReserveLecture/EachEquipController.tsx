import {
  EquipmentStocksType,
  requestReservationEquipmentState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RentEquipments as styles } from './styles';

import Entype from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { EachEquipInfo } from './types';

const EachEquipController = ({ item, equip }: any) => {
  // equip = 오리발의 270사이즈, currEquip = 현재 예약리스트에 올라가 있는 대여 물품 정보,
  // thisEquipmentArr = 예약리스트에 올라간 오리발 사이즈 모두의 정보 배열,
  const [thisEquipmentArr, setThisEquipmentArr] = useRecoilState(
    requestReservationEquipmentState(item.id),
  );
  const studentsNumber = useRecoilValue(studentNumberState);
  let targetIndex: null | number = null;
  console.log(equip, 'equip');
  console.log(item, 'item');

  const controllStock = (type: 'Increase' | 'Decrease') => {
    // 지금 상태에서 현재 상태의 객체만 제외한 배열을 만들기 위해서 상태값을 담아둔다.
    const currEquips = [...thisEquipmentArr]; // 현재 오리발의 전체 정보를 가진 배열 저장
    const filteredEquips = currEquips.filter(
      // 오리발 전체 배열에서 270값을 수정해야 하므로 그 값만 제외한 배열
      (currEquip, index) => {
        if (
          currEquip.scheduleEquipmentStockId !== equip.scheduleEquipmentStockId
        )
          return true;
        else {
          targetIndex = index;
          return false;
        }
      },
    );

    const { quantity: maxQuantity } = item.equipmentStocks.find(
      (eachEquipInfo: EachEquipInfo) =>
        equip.scheduleEquipmentStockId === eachEquipInfo.id,
    );

    const newEquip = {
      ...equip,
      rentNumber:
        type === 'Increase'
          ? Math.min(equip.rentNumber + 1, maxQuantity, studentsNumber) // 선택한 학생수 이상으로 못 고르게 설정
          : Math.max(equip.rentNumber - 1, 1), // 최소값1
    };

    if (targetIndex === null) {
      setThisEquipmentArr([...filteredEquips, newEquip]); // 정보를 수정한 270사이즈 객체와, 270을 제외한 정보를 가진 배열을 합쳐서 새 상태로 만든다.
    } else {
      filteredEquips.splice(targetIndex, 0, newEquip); // 정보를 수정한 270사이즈 객체와, 270을 제외한 정보를 가진 배열을 합쳐서 새 상태로 만든다.
      setThisEquipmentArr([...filteredEquips]); // 정보를 수정한 270사이즈 객체와, 270을 제외한 정보를 가진 배열을 합쳐서 새 상태로 만든다.
    }
  };

  console.log(item);

  useEffect(() => {
    const adjustEquipsNumber = () => {
      setThisEquipmentArr(thisEquipmentArr =>
        thisEquipmentArr.map(equip =>
          equip.rentNumber > studentsNumber
            ? { ...equip, rentNumber: studentsNumber }
            : equip,
        ),
      );
    };

    adjustEquipsNumber();
  }, [studentsNumber]);

  return (
    <View style={styles.sizeItemOuterContainer}>
      <View style={styles.sizeItemContainer}>
        <View style={styles.itemName}>
          <Text style={styles.itemNameText}>
            {item.name} {equip.size}
          </Text>
        </View>
        <View style={styles.sizeControllerContainer}>
          <TouchableOpacity onPress={() => controllStock('Decrease')}>
            <Entype name="minus" size={20} color={'#207AB4'} />
          </TouchableOpacity>
          <Text>{equip.rentNumber} 개</Text>
          <TouchableOpacity onPress={() => controllStock('Increase')}>
            <Entype name="plus" size={20} color={'#207AB4'} />
          </TouchableOpacity>
        </View>
      </View>
      <Text>
        (재고:{' '}
        {
          item.equipmentStocks.find(
            (stock: EquipmentStocksType) =>
              stock.id === equip.scheduleEquipmentStockId,
          ).quantity
        }
        개)
      </Text>
      <AntDesign
        name="close"
        size={20}
        onPress={() =>
          setThisEquipmentArr(state =>
            state.filter(
              s =>
                s.scheduleEquipmentStockId !== equip.scheduleEquipmentStockId,
            ),
          )
        }
      />
    </View>
  );
};

export default EachEquipController;
