import {
  getEquipmentsState,
  getTheSameClassScheduleState,
  lectureCommonSelectorFamily,
  lectureIdState,
  requestReservationEquipmentArrayState,
  requestReservationEquipmentDetailType,
  requestReservationEquipmentState,
  selectedClassByIdSelector,
} from '@/src/recoil/LectureStack';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import EachSchedule from './EachSchedule';
import { aboutReservationDetail as styles } from './styles';

const AboutReservationDetail = () => {
  // 강의 제목, 단체, level
  const { contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('Info'),
  );
  const classSchedule = useRecoilValue(selectedClassByIdSelector);
  const reservedEquipmentsArray: requestReservationEquipmentDetailType[] =
    useRecoilValue(requestReservationEquipmentArrayState);

  return (
    <View style={styles.container}>
      <Text style={styles.lectureTitle}>{contents.title}</Text>
      <View style={styles.organizationLevelContainer}>
        <Text style={styles.organizationText}>#{contents.organization}</Text>
        <Text style={styles.organizationText}>#Lv{contents.level[5]}</Text>
      </View>
      <View style={styles.scheduleInfoContainer}>
        <FlatList
          data={classSchedule[1]}
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
