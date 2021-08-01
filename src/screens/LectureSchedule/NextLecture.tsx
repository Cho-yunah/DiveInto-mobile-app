import React from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import {
  LectureImg,
  TouchSwipe,
  LectureContents,
} from '@components/LectureSchedule';
import { nextReservationLectureListState } from '@recoil/ProfileStack';
import CommonLoading from '@components/common/CommonLoading';
import CommonEmptyView from '@components/common/CommonEmptyView';

export default function NextLectureScreen() {
  const reservationList = useRecoilValue(nextReservationLectureListState);

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
              type="next"
              reservationId={item.reservationId}
            ></TouchSwipe>
          );
        }}
        keyExtractor={item => String(item.reservationId)}
        showsVerticalScrollIndicator={false}
      />
    ) : (
      <CommonEmptyView
        guideText="예약한 강의가 없습니다."
        buttonText="강의 둘러보기"
        moveViewName="ProfileMain"
      />
    )
  ) : (
    <CommonLoading />
  );

  return <View style={styles.eachScreenContainerStyle}>{ListEl}</View>;
}
