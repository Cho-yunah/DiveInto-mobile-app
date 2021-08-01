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
import CommonLoading from '@components/common/CommonLoading';
import CommonEmptyView from '@/src/components/common/CommonEmptyView';
export default function LastLectureScreen() {
  const reservationList = useRecoilValue(lastReservationLectureListState);

  console.log(reservationList);

  const ListEl = reservationList ? (
    reservationList.length !== 0 ? (
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
              type="last"
              reservationId={item.reservationId}
            ></TouchSwipe>
          );
        }}
        keyExtractor={item => String(item.reservationId)}
        showsVerticalScrollIndicator={false}
      />
    ) : (
      <CommonEmptyView
        guideText="지난 강의가 없습니다."
        buttonText="강의 둘러보기"
        moveViewName="ProfileMain"
      />
    )
  ) : (
    <CommonLoading />
  );

  return <View style={styles.eachScreenContainerStyle}>{ListEl}</View>;
}
