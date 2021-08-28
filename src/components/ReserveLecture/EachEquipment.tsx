import React, { Suspense, useEffect, useState } from 'react';
import {
  providedEquipmentsState,
  EquipmentsByScheduleIdType,
  selectedEquipmentsIdState,
  reservationEquipmentObjState,
  requestReservationEquipmentDetailType,
} from '@/src/recoil/LectureStack';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { View, TouchableOpacity, Text } from 'react-native';
import { RentEquipments as styles } from './styles';
import addCashComma from '@/src/lib/utils/addCashComma';
import EachEquipController from './EachEquipController';

type EachEquipmentsProps = {
  item: EquipmentsByScheduleIdType;
  setIsOpen: (isOpen: boolean) => void;
};

const EachEquipment = ({ item, setIsOpen }: EachEquipmentsProps) => {
  const [displayedPrice, setDisplayedPrice] = useState<number>(item.price);
  const [selectedEquipmentsArray, setSelectedEquipmentsArray] = useState<
    requestReservationEquipmentDetailType[]
  >([]);
  const setSelectedEquipments = useSetRecoilState(selectedEquipmentsIdState);
  const setProvidedEquipments = useSetRecoilState(
    providedEquipmentsState(item.scheduleEquipmentId),
  ); // 선택된 일정에서 제공되는 대여 장비 리스트

  const [selectedEquipmentsObj, setSelectedEquipmentsObj] = useRecoilState(
    reservationEquipmentObjState,
  );

  useEffect(() => {
    setProvidedEquipments({
      name: item.name,
      id: item.scheduleEquipmentId,
      stocks: item.stockInfoList,
    });
  }, []);

  useEffect(() => {
    const pricePerEach = item.price; // 1개당 가격
    let NumOfEquipment = 0;
    const newSelectedEquipmentsArray: requestReservationEquipmentDetailType[] =
      [];

    // 오리발 전체에 대한 정보를 가진 객체에서 사이즈 별 오리발의 정보를 가진 객체를 순회해서 단위가격 * 갯수로 가격 총합을 구한다.
    const targetEquipmentObj = {
      ...selectedEquipmentsObj[item.scheduleEquipmentId]?.equipmentStocks,
    };

    for (const stockIdBySize in targetEquipmentObj) {
      const {
        rentNumber,
        size,
        name,
        price,
        totalRentNumber,
        quantity,
        scheduleEquipmentStockId,
      } = targetEquipmentObj[stockIdBySize];

      console.log(targetEquipmentObj[stockIdBySize]);

      NumOfEquipment += rentNumber;

      newSelectedEquipmentsArray.push({
        scheduleEquipmentStockId, // 사이즈별 재고 아이디
        rentNumber, // 대여하고 싶은 갯수
        size, // 사이즈
        name, // 장비 이름
        price,
        totalRentNumber, // 같은 일정의 다른사람들이 대여한 갯수
        quantity, // 전체 재고
      });
    }

    setSelectedEquipmentsArray(newSelectedEquipmentsArray);

    setDisplayedPrice(NumOfEquipment * pricePerEach);
  }, [selectedEquipmentsObj]);

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
            setSelectedEquipments({
              id: item.scheduleEquipmentId, // 해당 일정의 오리발이면, 오리발 자체의 id, (사이즈별 id아님)
              name: item.name,
            });
            setIsOpen(true);
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
        {selectedEquipmentsArray.map(selectedEquipBySize => (
          <EachEquipController
            item={item} // 오리발 전체에 대한 정보를 가진 객체(오리발 id, 가격, 이름, size별 정보 객체)
            currControllerEquip={selectedEquipBySize} // 내가 대여하고 싶은 장비의 사이즈에 대한 정보를 가진 배열의 한 원소(size별 오리발 정보 객체,)
            key={selectedEquipBySize.scheduleEquipmentStockId}
          />
        ))}
      </View>
    </Suspense>
  );
};

export default EachEquipment;
