import React, { Suspense } from 'react';
import {
  eachEquipmentState,
  requestReservationEquipmentState,
  selectedEquipmentsIdState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { View, TouchableOpacity, Text } from 'react-native';
import { RentEquipments as styles } from './styles';
import addCashComma from '@/src/lib/utils/addCashComma';
import { useEffect } from 'react';
import Entype from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import { useRef } from 'react';

const EachEquipment = ({ item, setIsOpen }: any) => {
  const [displayedPrice, setDisplayedPrice] = useState<number>(item.price);
  const selectedEquipments = useSetRecoilState(selectedEquipmentsIdState);
  const setEachEquipment = useSetRecoilState(eachEquipmentState(item.id));
  // 현재 장비중에 대여하고 싶은 물품 사이즈와 수량 담은 배열
  const thisEquipmentArr = useRecoilValue(
    requestReservationEquipmentState(item.id),
  );

  useEffect(() => {
    setEachEquipment({
      name: item.name,
      id: item.id,
      stocks: item.equipmentStocks,
    });
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
          <EachEquipController item={item} equip={equip} />
        ))}
      </View>
    </Suspense>
  );
};

export default EachEquipment;

const EachEquipController = ({ item, equip }: any) => {
  // equip = 오리발의 270사이즈, currEquip = 현재 예약리스트에 올라가 있는 대여 물품 정보
  const [thisEquipmentArr, setThisEquipmentArr] = useRecoilState(
    requestReservationEquipmentState(item.id),
  );
  const studentsNumber = useRecoilValue(studentNumberState);

  let orderNumber: null | number = null;
  const controllStock = (type: 'Increase' | 'Decrease') => {
    // 지금 상태에서 현재 상태의 객체만 제외한 배열을 만들기 위해서 상태값을 담아둔다.
    const currEquips = thisEquipmentArr; // 현재 오리발의 전체 정보를 가진 배열 저장
    const filteredEquips = currEquips.filter(
      // 오리발 전체 배열에서 270값을 수정해야 하므로 그 값만 제외한 배열
      (currEquip, index) => {
        if (
          currEquip.scheduleEquipmentStockId !== equip.scheduleEquipmentStockId
        ) {
          return true;
        } else {
          orderNumber = index;
          return false;
        }
      },
    );

    const newEquip = {
      ...equip,
      rentNumber:
        type === 'Increase'
          ? Math.min(equip.rentNumber + 1, studentsNumber) // 선택한 학생수 이상으로 못 고르게 설정
          : Math.max(equip.rentNumber - 1, 1), // 최소값1
    };

    if (orderNumber === null) {
      setThisEquipmentArr([...filteredEquips, newEquip]); // 정보를 수정한 270사이즈 객체와, 270을 제외한 정보를 가진 배열을 합쳐서 새 상태로 만든다.
    } else {
      filteredEquips.splice(orderNumber, 0, newEquip); // 정보를 수정한 270사이즈 객체와, 270을 제외한 정보를 가진 배열을 합쳐서 새 상태로 만든다.
      setThisEquipmentArr([...filteredEquips]); // 정보를 수정한 270사이즈 객체와, 270을 제외한 정보를 가진 배열을 합쳐서 새 상태로 만든다.
    }
  };

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
  console.log(thisEquipmentArr);

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
