import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import { NewLecture } from '@components/MainList/Lecture/NewLectureList';
import { NewLectureProps } from '@components/MainList/Lecture/types';

import { getInstanceATK } from '@lib/api/axios';
export function NewLectureMore() {
  const [page, setPage] = useState(0);
  const [lectures, setLectures] = useState<NewLectureProps[]>([]);

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

  const renderItem = ({ item }: { item: NewLectureProps }) => {
    console.log('lecture : ', item);
    return (
      <NewLecture
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
        containerStyle={{
          width: '100%',
          marginBottom: 20,
          justifyContent: 'center',
          borderRadius: 10,
        }}
      />
    );
  };

  return (
    <View style={{}}>
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
