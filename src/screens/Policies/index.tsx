import React from 'react';
import { View } from 'react-native';

import { mainPolicyScteen as styles } from './styles';
import { PolicyProps } from '@/src/navigators/ProfileStack/types';
import { CommonTitle } from '@/src/components/PolicyBoard';

export default function PolicyScreen({ navigation }: PolicyProps) {
  const moveBusinessPolicyScreen = () => {
    navigation.navigate('BusinessPolicy');
  };

  const moveServicePolicyScreen = () => {
    navigation.navigate('ServicePolicy');
  };

  const moveFTPolicyScreen = () => {
    navigation.navigate('FTPolicy');
  };

  const movePrivacyPolicyScreen = () => {
    navigation.navigate('PrivacyPolicy');
  };

  return (
    <View style={styles.container}>
      <CommonTitle
        title="사업자정보확인"
        movePolicyScreen={moveBusinessPolicyScreen}
      />
      <CommonTitle
        title="이용약관"
        movePolicyScreen={moveServicePolicyScreen}
      />
      <CommonTitle
        title="전자금융거래 이용약관"
        movePolicyScreen={moveFTPolicyScreen}
      />
      <CommonTitle
        title="개인정보 처리방침"
        movePolicyScreen={movePrivacyPolicyScreen}
      />
    </View>
  );
}
