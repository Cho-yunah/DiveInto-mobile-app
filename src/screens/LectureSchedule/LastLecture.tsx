import React from 'react';
import { View, FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import {
  LectureImg,
  TouchSwipe,
  LectureContents,
} from '@components/LectureSchedule';
import { lastReservationLectureListState } from '@recoil/ProfileStack';
export default function LastLectureScreen() {
  const reservationList = useRecoilValue(lastReservationLectureListState);

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
                reservationDate={item.reservationDate}
                nickname={item.instructorNickname}
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
