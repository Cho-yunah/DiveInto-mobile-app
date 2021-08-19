import {
  currScheduleIdState,
  providedEquipmentsState,
  getEquipmentsStateByScheduleId,
  reservationEquipmentObjState,
  selectedEquipmentsIdState,
} from '@/src/recoil/LectureStack';
import React, { useEffect, useRef } from 'react';
import {
  useWindowDimensions,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RentEquipments as styles } from './styles';
import { SizeModalProps } from './types';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SizeModal = ({ setIsOpen }: SizeModalProps) => {
  const selectedEquipmentsId = useRecoilValue(selectedEquipmentsIdState); // 한일정에서 오리발 자체의 id + 이름(오리발), 사이즈별 id아님
  const scheduleId = useRecoilValue(currScheduleIdState);
  const getEquipmentsByScheduleId = useRecoilValue(
    getEquipmentsStateByScheduleId(scheduleId),
  );

  // 현재 선택된 일정에서 대여 가능한 장비의 배열
  const providedEquipments = useRecoilValue(
    providedEquipmentsState(selectedEquipmentsId.id),
  );
  const [selectedEquipmentsObj, setSelectedEquipmentsObj] = useRecoilState(
    reservationEquipmentObjState,
  );

  console.log(selectedEquipmentsObj, '23792384729384732948723987');

  const windowWidth = useWindowDimensions().width;
  const slideAnim = useRef(new Animated.Value(500)).current;
  // 현재 선택된 장비의 가격
  const selectedEquipmentsPrice =
    getEquipmentsByScheduleId.find(
      equip => equip.scheduleEquipmentId === selectedEquipmentsId.id,
    )?.price || 0;

  const selectSize = (
    size: string,
    scheduleEquipmentStockId: number,
    totalRentNumber: number,
    quantity: number,
  ) => {
    // 예약요청에 넣어서 보낼 장비 선택상태 객체 저장,
    const currEquipmentsObj = { ...selectedEquipmentsObj };
    currEquipmentsObj[selectedEquipmentsId.id] = {
      name: providedEquipments.name, // 장비 자체의 이름
      price: selectedEquipmentsPrice,
      equipmentStocks: {
        ...currEquipmentsObj[selectedEquipmentsId.id]?.equipmentStocks,
        [scheduleEquipmentStockId]: {
          scheduleEquipmentStockId, // 장비안의 특정사이즈의 id값
          rentNumber: 1, // 갯수
          size, // 사이즈
          name: selectedEquipmentsId.name, // 장비 이름
          price: selectedEquipmentsPrice,
          totalRentNumber, // 사람들이 현재까지 빌린 갯수
          quantity, // 전체 재고
        },
      },
    };

    setSelectedEquipmentsObj(currEquipmentsObj); // 새로 만든 객체로 상태 변경
    setIsOpen(false);
  };

  useEffect(() => {
    const slideUp = () =>
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();

    slideUp();
  }, []);

  return (
    <Animated.View
      style={[
        styles.modalContainer,
        { width: windowWidth },
        {
          transform: [
            {
              translateY: slideAnim,
            },
          ],
        },
      ]}
    >
      <AntDesign
        name="close"
        size={20}
        color={'white'}
        style={styles.closeIcon}
        onPress={() => {
          setIsOpen(false);
        }}
      />
      <ScrollView style={styles.modalScrollView}>
        <Text style={styles.modalSelectSize}>
          {providedEquipments.name} 사이즈 선택
        </Text>
        <View style={styles.modalInnerView}>
          {providedEquipments.stocks.map(equip => (
            <TouchableOpacity
              style={
                equip.totalRentNumber === equip.quantity
                  ? styles.modalSizeViewDisabled
                  : styles.modalSizeView
              }
              key={equip.scheduleEquipmentStockId}
              disabled={equip.totalRentNumber === equip.quantity} // 남은 재고 없으면 선택 불가능.
              onPress={() => {
                selectSize(
                  equip.size,
                  equip.scheduleEquipmentStockId,
                  equip.totalRentNumber,
                  equip.quantity,
                );
              }}
            >
              <Text style={styles.modalSize}>{equip.size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default SizeModal;
