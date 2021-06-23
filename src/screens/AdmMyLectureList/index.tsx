import React from 'react';
import { View, Text } from 'react-native';

import FilterTagList from '@components/common/FilterTag';
import { MyLectureList } from '@components/Instructor/MyLecture';

type filterTagList = '등록순' | '최신강의순' | '낮은가격순' | '높은가격순';

export default function AdmMyLectureList() {
  const filters: filterTagList[] = [
    '등록순',
    '최신강의순',
    '낮은가격순',
    '높은가격순',
  ];
  return (
    <View style={{ marginLeft: 18, marginRight: 18 }}>
      <FilterTagList filters={filters} />
      <MyLectureList />
    </View>
  );
}
