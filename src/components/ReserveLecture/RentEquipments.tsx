import React, { Suspense, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { RentEquipments as styles } from './styles';
import SizeModal from './SizeModal';
import EachEquipment from './EachEquipment';
import { useRecoilValue } from 'recoil';
import {
  getEquipmentsState,
  lectureIdState,
  selectedClassByIdSelector,
} from '@/src/recoil/LectureStack';

const RentEquipments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>(옵션) 장비대여</Text>
      <Suspense fallback={<View></View>}>
        <RentEquipmentsMain />
      </Suspense>
    </View>
  );
};

const RentEquipmentsMain = () => {
  const lectureId = useRecoilValue(lectureIdState);
  const [isOpen, setIsOpen] = useState(false);
  const getEquipments = useRecoilValue(getEquipmentsState(lectureId!));
  const sameClassScheduleArr = useRecoilValue(selectedClassByIdSelector);
  const isAvailableClass =
    sameClassScheduleArr[0]?.maxNumber -
      sameClassScheduleArr[0]?.currentNumber >
    0
      ? true
      : false;

  if (!sameClassScheduleArr.length || !isAvailableClass)
    return (
      <View>
        <Text>예약 가능한 일정을 선택해주세요</Text>
      </View>
    );

  return (
    <>
      <FlatList
        data={getEquipments}
        renderItem={({ item }) => (
          <EachEquipment item={item} setIsOpen={setIsOpen} key={item.id} />
        )}
      />
      {isOpen ? <SizeModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};

export default RentEquipments;
