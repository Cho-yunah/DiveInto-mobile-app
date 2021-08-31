import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { RecoilRoot } from 'recoil';
import { MainProps } from './types';
import { styles } from './styles';
import * as Color from '@config/colors';

import {
  Header,
  NewLectureList,
  PopularLectureList,
} from '@/src/components/MainList';

import { MainListProps } from '@navigators/LectureStack/types';

export default function MainList({ navigation, route }: MainListProps) {
  const onKeywordSearchPress = () => navigation.navigate('강의 키워드 검색');
  const onFilterSearchPress = () => navigation.navigate('강의 필터 검색');
  const onNewLectureMorePress = () => navigation.navigate('새로운 강의 더보기');
  const onPopularLectureMorePress = () =>
    navigation.navigate('인기 강의 더보기');

  return (
    // <RecoilRoot>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          userName={'퐁당퐁당'}
          onKeywordSearchPress={onKeywordSearchPress}
          onFilterSearchPress={onFilterSearchPress}
        />
        <View style={{ backgroundColor: Color.Background }}>
          <NewLectureList onMorePress={onNewLectureMorePress} />
          <PopularLectureList onMorePress={onPopularLectureMorePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
    // </RecoilRoot>
  );
}
