import React from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import {
  LectureImg,
  TouchSwipe,
  LectureContents,
} from '@components/LectureSchedule';
import { getLectureScheduleListSelector } from '@/src/recoil/ProfileStack/dataFetch';
import CommonEmptyView from '@components/common/CommonEmptyView';
import withSuspense from '@/src/lib/HOC/withSuspense';
import AutoCloseAlertModal from '@/src/components/common/AutoCloseAlertModal';

function NextLectureScreen() {
  const reservationList = useRecoilValue(
    getLectureScheduleListSelector('next'),
  );

  if (reservationList.length === 0) {
    return (
      <View style={styles.eachScreenContainerStyle}>
        <CommonEmptyView
          guideText="예약한 강의가 없습니다."
          buttonText="강의 둘러보기"
          moveViewName="홈"
        />
      </View>
    );
  }

  return (
    <View style={styles.eachScreenContainerStyle}>
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
                  lectureType="next"
                />
              }
              reservationId={item.reservationId}
            />
          );
        }}
        keyExtractor={item => String(item.reservationId)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default withSuspense(NextLectureScreen);
