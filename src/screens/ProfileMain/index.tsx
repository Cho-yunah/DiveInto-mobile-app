import { HeaderContainer, MainContainer } from '@/src/components/ProfileMain';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { RecoilRoot } from 'recoil';

import { styles } from './styles';

export default function ProfileMain() {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <HeaderContainer />
        <MainContainer />
      </SafeAreaView>
    </RecoilRoot>
  );
}
