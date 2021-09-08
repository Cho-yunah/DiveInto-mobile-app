import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import { PopularLecture } from '@components/MainList/Lecture/PopularLectureList';
import { PopularLectureProps } from '@components/MainList/Lecture/types';

import { getInstanceATK } from '@lib/api/axios';
export function PopularLectureMore() {
  const [page, setPage] = useState(0);
  const [lectures, setLectures] = useState<PopularLectureProps[]>([]);

  const getData = async () => {
    try {
      const instanceAtk = await getInstanceATK();
      const res = await instanceAtk.get(
        `/lecture/popular/list?page=${page}&size=5`,
      );

      console.log(res.data._embedded);

      const status = res.status;
      if (status !== 200) throw new Error('필터강의 조회 에러');

      const newLectures = res.data._embedded.lectureInfoList;
      setLectures(lectures.concat(newLectures));
      setPage(page + 1);
    } catch (e) {
      console.log('강의 필터 조회 에러 : ', e);
    }
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  const handleLoadMore = () => {
    getData();
  };

  const renderItem = ({ item }: { item: PopularLectureProps }) => {
    console.log('lecture : ', item);
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
        isMarked={item.isMarked}
        price={item.price}
        period={item.period}
        starAvg={item.starAvg}
        reviewCount={item.reviewCount}
      />
    );
  };

  return (
    <View>
      {lectures && (
        <FlatList
          data={lectures}
          renderItem={renderItem}
          keyExtractor={(item, index) => `filterLecture${item.id}`}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          style={{ marginTop: 10, padding: 15 }}
        />
      )}
    </View>
  );
}
