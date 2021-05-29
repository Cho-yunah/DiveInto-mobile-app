import React from 'react';
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

export default function MainList({ userName = '퐁당퐁당' }: MainProps) {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header userName={userName} />
          <View style={{ backgroundColor: Color.Background }}>
            <NewLectureList />
            <PopularLectureList />
          </View>
        </ScrollView>
      </SafeAreaView>
    </RecoilRoot>
  );
}
