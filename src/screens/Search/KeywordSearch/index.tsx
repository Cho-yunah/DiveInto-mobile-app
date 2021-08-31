import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBox from '@components/MainList/Header/SearchBox';
import { PopularLecture } from '@components/MainList/Lecture/PopularLectureList';

import { PopularLectureProps } from '@components/MainList/Lecture/types';

import { useRecoilValue } from 'recoil';
import { searchText } from '@recoil/LectureStack';

import { getInstanceATK } from '@api/axios';

export function KeywordSearch() {
  const keyword = useRecoilValue(searchText);
  const [lectureInfoList, setLectureInfoList] = useState<PopularLectureProps[]>(
    [],
  );

  useEffect(() => {
    const search = async () => {
      const instance = await getInstanceATK();
      try {
        const res = await instance.get('/lecture/list/search/keyword', {
          params: {
            page: 0,
            size: 10,
            keyword,
          },
        });

        if (res.status !== 200) throw new Error('키워드 검색 에러');

        setLectureInfoList(res?.data?._embedded?.lectureInfoList);
      } catch (e) {
        console.log('키워드 검색 에러', e);
      }
    };
    search();
  }, [keyword]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ marginBottom: 20 }}>
        <SearchBox placeholder="검색어를 입력하세요." />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {lectureInfoList &&
          lectureInfoList.map(lecture => (
            <PopularLecture
              id={lecture.id}
              title={lecture.title}
              organization={lecture.organization}
              level={lecture.level}
              region={lecture.region}
              maxNumber={lecture.maxNumber}
              lectureTime={lecture.lectureTime}
              equipmentNames={lecture.equipmentNames}
              imageUrl={lecture.imageUrl}
              isMarked={lecture.isMarked}
              price={lecture.price}
              period={lecture.period}
              starAvg={lecture.starAvg}
              reviewCount={lecture.reviewCount}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
