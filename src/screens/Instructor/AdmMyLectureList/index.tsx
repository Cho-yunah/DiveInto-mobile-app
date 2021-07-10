import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

import NextButton from '@components/common/NextButton';
import FilterTagList from '@components/common/FilterTag';
import { MyLectureList } from '@components/Instructor/MyLecture';
import { MyLectureListProps } from '@navigators/MyLectureStack/types';

type filterTagList = '등록순' | '최신강의순' | '낮은가격순' | '높은가격순';

export function AdmMyLectureList({ navigation }: MyLectureListProps) {
  useLayoutEffect(() => {
    const onPress = () => navigation.navigate('강의등록');

    navigation.setOptions({
      headerRight: () => <NextButton onPress={onPress} text="강의등록" />,
    });
  }, []);

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
