import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { CommonPolicySlideStyle as styles } from './styles';

export default function CommonPolicySlide({
  title,
  start,
  ruleTitle,
  sub,
  desc,
}: any) {
  const [show, setShow] = useState(false);

  const showRuleSlide = () => {
    setShow(state => !state);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={showRuleSlide}
        style={styles.buttonStyle}
        activeOpacity={0.9}
      >
        <View>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text style={styles.dateTextStyle}>{start}</Text>
        </View>
        <Text>x</Text>
      </TouchableOpacity>
      {show && (
        <View style={styles.ruleContainer}>
          <Text style={[styles.ruleSubTitleStyle, styles.ruleTitleStyle]}>
            {ruleTitle}
          </Text>
          <Text style={styles.ruleSubTitleStyle}>{sub}</Text>
          <Text style={styles.ruleDescStyle}>{desc}</Text>
        </View>
      )}
    </ScrollView>
  );
}
