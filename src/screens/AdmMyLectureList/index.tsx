import React from 'react';
import { View, Text } from 'react-native';

import FilterTagList from '@components/common/FilterTag';

type filterTagList = '등록순' | '최신강의순' | '낮은가격순' | '높은가격순';

export default function AdmMyLectureList() {
  const filters: filterTagList[] = [
    '등록순',
    '최신강의순',
    '낮은가격순',
    '높은가격순',
  ];
  return (
    <View>
      <FilterTagList filters={filters} />
    </View>
  );
}
