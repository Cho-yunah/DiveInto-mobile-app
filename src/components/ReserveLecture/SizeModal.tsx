import {
  eachEquipmentState,
  getEquipmentsState,
  lectureIdState,
  requestReservationEquipmentState,
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
  const selectedEquipmentsId = useRecoilValue(selectedEquipmentsIdState);
  const lectureId = useRecoilValue(lectureIdState);
  const getEquipments = useRecoilValue(getEquipmentsState(lectureId!));
  const eachEquipment = useRecoilValue(
    eachEquipmentState(selectedEquipmentsId.id),
  );
  const windowWidth = useWindowDimensions().width;
  const slideAnim = useRef(new Animated.Value(500)).current;
  // 한 장비와 그 장비의 사이즈들의 예약 정보를 담고있는 배열
  const [thisEquipmentArr, setThisEquipmentArr] = useRecoilState(
    requestReservationEquipmentState(selectedEquipmentsId.id),
  );
  const selectedEquipmentsPrice =
    getEquipments.find(equip => equip.id === selectedEquipmentsId.id)?.price ||
    0;

  const slideUp = () =>
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

  const selectSize = (size: string, id: number) => {
    // 현재 배열 상태 저장,
    const currEquipmentsArr = thisEquipmentArr;
    // 현재 배열 에서 선택된 id(size값)를 가진 배열만 제거 = 필터링한 배열
    const filteredEquipmentsArr = currEquipmentsArr.filter(
      equipment => equipment.scheduleEquipmentStockId !== id,
    );
    // 필터링한 배열에 새로 만든 상태를 넣어서 같은 사이즈인 중복 객체 생성을 방지한다.
    setThisEquipmentArr([
      ...filteredEquipmentsArr,
      {
        scheduleEquipmentStockId: id,
        rentNumber: 1,
        size,
        name: selectedEquipmentsId.name,
        price: selectedEquipmentsPrice,
      },
    ]);
    setIsOpen(false);
  };

  useEffect(() => {
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
          {eachEquipment.name} 사이즈 선택
        </Text>
        <View style={styles.modalInnerView}>
          {eachEquipment.stocks.map((equip: any) => (
            <TouchableOpacity
              style={styles.modalSizeView}
              key={equip.id}
              onPress={() => {
                selectSize(equip.size, equip.id);
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
