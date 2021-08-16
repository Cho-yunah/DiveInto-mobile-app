import React, { useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';

import NextButton from '@components/common/NextButton';
import FilterTagList from '@components/common/FilterTag';
import { MyLectureList } from '@components/Instructor/MyLecture';
import { MyLectureListProps } from '@navigators/MyLectureStack/types';

type filterTagList = '등록순' | '최신강의순' | '낮은가격순' | '높은가격순';

export function AdmMyLectureList({ navigation }: MyLectureListProps) {
  useLayoutEffect(() => {
    const onPress = () => {
      console.log('강의등록 버튼 테스트');
      navigation.navigate('강의등록');
    };

    navigation.setOptions({
      title: '내 강의 목록',
      headerRight: () => (
        <NextButton onPress={onPress} text="강의등록" disable />
      ),
    });
  }, []);

  const filters: filterTagList[] = [
    '등록순',
    '최신강의순',
    '낮은가격순',
    '높은가격순',
  ];

  const [curFilter, setCurFilter] = useState<filterTagList>('등록순');

  const onLecturePress = (lectureId: number) =>
    navigation.navigate('강의정보관리', { lectureId });

  return (
    <View style={{ marginLeft: 18, marginRight: 18 }}>
      <FilterTagList
        filters={filters}
        onFilterChange={tag => setCurFilter(tag)}
      />
      <MyLectureList onPress={onLecturePress} filter={curFilter} />
    </View>
  );
}
