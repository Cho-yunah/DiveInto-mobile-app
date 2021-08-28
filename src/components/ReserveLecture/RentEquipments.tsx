import React, { Suspense, useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { RentEquipments as styles } from './styles';
import SizeModal from './SizeModal';
import EachEquipment from './EachEquipment';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currScheduleIdState,
  getEquipmentsStateByScheduleId,
  reservationEquipmentObjState,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import produce from 'immer';

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
  const scheduleId = useRecoilValue(currScheduleIdState);
  const getEquipmentsByScheduleId = useRecoilValue(
    getEquipmentsStateByScheduleId(scheduleId),
  ); // scheduleId별 대여 가능한 장비 목록
  const [reservationEquipmentObj, setReservationEquipmentObj] = useRecoilState(
    reservationEquipmentObjState,
  );
  const studentsNumber = useRecoilValue(studentNumberState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // scheduleId 값이 바뀌면 빈객체로 만들어준다.
    setReservationEquipmentObj({});
    setIsOpen(false); // 스케쥴 일정이 변하면 모달창은 닫아준다.
  }, [scheduleId]);

  useEffect(() => {
    // 학생수가 변하면 장비 대여 최대 갯수 자동 조절
    const adjustEquipsNumber = () => {
      const currReservationEquipmentObj = { ...reservationEquipmentObj };

      const newReservationEquipmentObj = produce(
        currReservationEquipmentObj,
        draft => {
          for (const equipmentId in draft) {
            for (const equipmentStockId in draft[equipmentId].equipmentStocks) {
              const currRentNumber =
                draft[equipmentId].equipmentStocks[equipmentStockId].rentNumber;

              draft[equipmentId].equipmentStocks[equipmentStockId].rentNumber =
                currRentNumber > studentsNumber
                  ? studentsNumber
                  : currRentNumber;
            }
          }
        },
      );

      setReservationEquipmentObj(newReservationEquipmentObj);
    };

    adjustEquipsNumber();
  }, [studentsNumber]);

  useEffect(() => {
    return () => {
      console.log('장비 리스트 clean up EachEquipment.tsx');
      setReservationEquipmentObj({}); // 대여하고싶은 장비의 정보를 가진 객체 초기화
    };
  }, []);

  if (!scheduleId)
    return (
      <View>
        <Text style={{ marginTop: 20 }}>
          장비 대여 신청을 위해서 강의 일정을 선택해주세요
        </Text>
      </View>
    );

  return (
    <>
      <FlatList
        keyExtractor={item => String(item.scheduleEquipmentId) + item.name}
        data={getEquipmentsByScheduleId}
        renderItem={({ item }) => (
          <EachEquipment item={item} setIsOpen={setIsOpen} />
        )}
      />
      {isOpen ? <SizeModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};

export default RentEquipments;
