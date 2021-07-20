import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import {
  LectureImg,
  TouchSwipe,
  LectureContents,
} from '@components/LectureSchedule';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nextReservationLectureListState } from '@/src/recoil/ProfileStack';
import CommonLoading from '@/src/components/common/CommonLoading';

export default function NextLectureScreen() {
  const reservationList = useRecoilValue(nextReservationLectureListState);

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
  ) : (
    <CommonLoading />
  );

  return <View style={styles.eachScreenContainerStyle}>{ListEl}</View>;
}
