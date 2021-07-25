import React from 'react';
import { FlatList, View, Text } from 'react-native';

import { commonPolicyScreenStyle as styles } from './styles';
import { servicePolicyInfo } from '@assets/data/staticData';
import { CommonPolicySlide } from '@components/NoticeBoard';

export default function ServicePolicyScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={servicePolicyInfo}
        renderItem={({ item }) => (
          <CommonPolicySlide
            title={item.title}
            start={item.startDate}
            ruleTitle={item.ruleTitle}
            sub={item.ruleSubTitle}
            desc={item.ruleDesc}
          />
        )}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
