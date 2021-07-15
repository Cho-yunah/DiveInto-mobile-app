import React from 'react';
import { FlatList, View, Text } from 'react-native';

import { styles } from './styles';
import {
  LectureImg,
  TouchSwipe,
  LectureContents,
} from '@components/LectureSchedule';
import { useRecoilValue } from 'recoil';
import {
  nextReservationLectureListState,
  reservationLectureListState,
} from '@/src/recoil/ProfileStack';

export default function NextLectureScreen() {
  const reservationList = useRecoilValue(reservationLectureListState);
  const nextReservationLectureList = useRecoilValue(
    nextReservationLectureListState,
  );

  console.log(nextReservationLectureList);

  const ListEl = reservationList ? (
    <FlatList
      data={reservationList}
      renderItem={({ item }) => {
        return (
          <TouchSwipe
            imgComponent={<LectureImg img={item.lectureImageUrl} />}
            contentsComponents={
              <LectureContents
                title={item.lectureTitle}
                level={item.level}
                group={item.organization}
              />
            }
            type="next"
          ></TouchSwipe>
        );
      }}
      keyExtractor={item => String(item.reservationId)}
      showsVerticalScrollIndicator={false}
    />
  ) : null;

  return <View style={styles.eachScreenContainerStyle}>{ListEl}</View>;
}
