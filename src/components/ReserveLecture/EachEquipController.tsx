import {
  EquipmentsByScheduleIdType,
  requestReservationEquipmentDetailType,
  reservationEquipmentObjState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import produce from 'immer';
import { Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RentEquipments as styles } from './styles';

import Entype from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

type EachEquipControllerProps = {
  item: EquipmentsByScheduleIdType;
  currControllerEquip: requestReservationEquipmentDetailType;
};

const EachEquipController = ({
  item, // 오리발 전체에 대한 정보를 가진 객체(오리발 id, 가격, 이름, size별 정보 객체)
  currControllerEquip, // 내가 대여하고 싶은 장비의 사이즈에 대한 정보를 가진 배열의 한 원소(size별 오리발 정보 객체,) (270사이즈만의 정보)
}: EachEquipControllerProps) => {
  const studentsNumber = useRecoilValue(studentNumberState);
  const [reservingEquipmentsObj, setReservingEquipmentsObj] = useRecoilState(
    reservationEquipmentObjState,
  );

  const controllStock = (type: 'Increase' | 'Decrease') => {
    // 지금 상태에서 현재 상태의 객체만 제외한 배열을 만들기 위해서 상태값을 담아둔다.
    const currReservingEquipsObj = { ...reservingEquipmentsObj }; // 현재 예약리스트에 올라가있는 대여하고 싶은 장비 정보 (오리발id: {오리발 재고id: {}.....})

    const newReservingEquipsObj = produce(currReservingEquipsObj, draft => {
      draft[item.scheduleEquipmentId].equipmentStocks[
        currControllerEquip.scheduleEquipmentStockId
      ].rentNumber =
        type === 'Increase'
          ? Math.min(
              studentsNumber,
              draft[item.scheduleEquipmentId].equipmentStocks[
                currControllerEquip.scheduleEquipmentStockId
              ].rentNumber + 1,
              currControllerEquip.quantity -
                currControllerEquip.totalRentNumber,
            )
          : Math.max(
              1,
              draft[item.scheduleEquipmentId].equipmentStocks[
                currControllerEquip.scheduleEquipmentStockId
              ].rentNumber - 1,
            );
    });
    setReservingEquipmentsObj(newReservingEquipsObj);
  };

  const deleteStock = () => {
    const currReservingEquipsObj = { ...reservingEquipmentsObj }; // 현재 예약리스트에 올라가있는 대여하고 싶은 장비 정보 (오리발id: {오리발 재고id: {}.....})

    const newReservingEquipsObj = produce(currReservingEquipsObj, draft => {
      delete draft[item.scheduleEquipmentId].equipmentStocks[
        currControllerEquip.scheduleEquipmentStockId
      ];
    });

    setReservingEquipmentsObj(newReservingEquipsObj);
  };

  return (
    <View style={styles.sizeItemOuterContainer}>
      <View style={styles.sizeItemContainer}>
        <View style={styles.itemName}>
          <Text style={styles.itemNameText}>
            {item.name} {currControllerEquip.size}
          </Text>
        </View>
        <View style={styles.sizeControllerContainer}>
          <TouchableOpacity onPress={() => controllStock('Decrease')}>
            <Entype name="minus" size={20} color={'#207AB4'} />
          </TouchableOpacity>
          <Text>{currControllerEquip.rentNumber} 개</Text>
          <TouchableOpacity onPress={() => controllStock('Increase')}>
            <Entype name="plus" size={20} color={'#207AB4'} />
          </TouchableOpacity>
        </View>
      </View>
      <Text>
        (재고:{' '}
        {currControllerEquip.quantity - currControllerEquip.totalRentNumber}
        개)
      </Text>
      <AntDesign name="close" size={20} onPress={deleteStock} />
    </View>
  );
};

export default EachEquipController;
