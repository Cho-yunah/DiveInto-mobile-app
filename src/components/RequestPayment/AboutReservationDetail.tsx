import {
  getEquipmentsState,
  getTheSameClassScheduleState,
  lectureDetailState,
  requestReservationEquipmentDetailType,
  requestReservationEquipmentState,
} from '@/src/recoil/LectureStack';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';
import EachSchedule from './EachSchedule';
import { aboutReservationDetail as styles } from './styles';

const AboutReservationDetail = () => {
  // 강의 제목, 단체, level
  const lectureDetail = useRecoilValue(lectureDetailState);
  const classSchedule = useRecoilValue(getTheSameClassScheduleState);
  const equipmentsState = useRecoilValue(getEquipmentsState(1)); // 강의 id -> 제공되는 대여장비, name,id, price
  const reservedEquipmentsArray: requestReservationEquipmentDetailType[] = [];
  equipmentsState.forEach(equip =>
    reservedEquipmentsArray.push(
      ...useRecoilValue(requestReservationEquipmentState(equip.id)),
    ),
  );

  console.log(classSchedule);
  console.log(reservedEquipmentsArray, ';sdfsdkfjsdlkfj');

  return (
    <View style={styles.container}>
      <Text style={styles.lectureTitle}>{lectureDetail.title}</Text>
      <View style={styles.organizationLevelContainer}>
        <Text style={styles.organizationText}>
          #{lectureDetail.organization}
        </Text>
        <Text style={styles.organizationText}>#Lv{lectureDetail.level[5]}</Text>
      </View>
      <View style={styles.scheduleInfoContainer}>
        <FlatList
          data={classSchedule}
          renderItem={({ item }) => <EachSchedule item={item} />}
        />
        <FlatList
          data={reservedEquipmentsArray}
          renderItem={({ item }) => (
            <View style={styles.equipmentsContainer}>
              <View style={styles.equipmentsTextContainer}>
                <Text style={styles.equipmentsText}>
                  {item.name} {item.size}
                </Text>
              </View>
              <Text>{item.rentNumber} 개</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default AboutReservationDetail;
