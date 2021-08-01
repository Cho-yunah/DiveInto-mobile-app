import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { LectureLikeProps } from './types';

import instance from '@lib/api/axios';
import { useRecoilValue } from 'recoil';
import { atkState } from '@recoil/ProfileStack';
import CommonLoading from '@components/common/CommonLoading';
import CommonEmptyView from '@components/common/CommonEmptyView';
import { PopularLecture } from '@components/MainList/Lecture/PopularLectureList';

export default function LectureLikeScreen() {
  const atk = useRecoilValue(atkState);
  const [lectureList, setLectureList] = useState<[] | null>(null);

  // isMarked, price, period 값이 lectureList에 있는지 확인 후 props로 넣어주기
  console.log(lectureList);

  useEffect(() => {
    const getLikeLecture = async () => {
      try {
        const res = await instance.get('/lecture/like/list?page=0&size=2', {
          headers: {
            Authorization: atk,
          },
        });

        if (res.data._embedded) {
          setLectureList(res.data._embedded.likeLectureInfoList);
        } else {
          setLectureList([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getLikeLecture();
  }, [atk]);

  const ListEl = lectureList ? (
    lectureList.length !== 0 ? (
      <FlatList
        data={lectureList}
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
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    ) : (
      <CommonEmptyView
        guideText="강의가 없습니다."
        buttonText="강의 둘러보기"
        moveViewName="ProfileMain"
      />
    )
  ) : (
    <CommonLoading />
  );

  return <View style={styles.eachContainer}>{ListEl}</View>;
}
