import React from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import { LectureLikeProps } from './types';
import { getLikeListSelector } from '@/src/recoil/ProfileStack/dataFetch';
import CommonEmptyView from '@components/common/CommonEmptyView';
import { PopularLecture } from '@components/MainList/Lecture/PopularLectureList';

export default function LectureLike() {
  const LectureLikeList = useRecoilValue(getLikeListSelector('lecture'));

  // price, period 값이 lectureList에 있는지 확인 후 props로 넣어주기
  console.log(LectureLikeList, 'LectureLikeList');

  if (LectureLikeList.length === 0) {
    return (
      <View style={styles.eachContainer}>
        <CommonEmptyView
          guideText="강의가 없습니다."
          buttonText="강의 둘러보기"
          moveViewName="홈"
        />
      </View>
    );
  }

  return (
    <View style={styles.eachContainer}>
      <FlatList
        data={LectureLikeList}
        renderItem={({ item }: { item: LectureLikeProps }) => {
          return (
            <PopularLecture
              id={item.id}
              title={item.title}
              organization={item.organization}
              level={item.level}
              region={item.region}
              maxNumber={item.maxNumber}
              lectureTime={item.lectureTime}
              equipmentNames={item.equipmentNames}
              imageUrl={item.imageUrl}
              starAvg={2.5}
              reviewCount={item.reviewCount}
              isMarked={item.isMarked}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
