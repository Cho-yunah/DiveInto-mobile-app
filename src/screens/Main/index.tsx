import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { RecoilRoot } from 'recoil';
import { styles } from './styles';
import { Header, NewLectureList, PopularLectureList } from '@components/Main';
import * as Color from '@config/colors';

type Props = {
  userName: string;
};

export default function Main({ userName = '퐁당퐁당' }: Props) {
  return (
    <RecoilRoot>
      <ScrollView style={styles.container}>
        <Header userName={userName} />
        <View style={{ backgroundColor: Color.Background }}>
          <NewLectureList />
          <PopularLectureList />
        </View>
      </ScrollView>
    </RecoilRoot>
  );
}
