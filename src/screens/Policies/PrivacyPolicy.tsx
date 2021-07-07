import React from 'react';
import { FlatList, View } from 'react-native';

import { commonPolicyScreenStyle as styles } from './styles';
import { privacyPolicyInfo } from '@assets/data/staticData';
import { CommonPolicySlide } from '@components/NoticeBoard';

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={privacyPolicyInfo}
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
      />
    </View>
  );
}
