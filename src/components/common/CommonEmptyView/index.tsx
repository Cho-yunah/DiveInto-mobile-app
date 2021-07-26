import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { CommonEmptyViewProps } from './types';

export default function CommonEmptyView({
  guideText,
  buttonText,
  moveViewName,
}: CommonEmptyViewProps) {
  const navigation = useNavigation();

  // 이동하겨
  const moveSreen = () => {
    navigation.navigate(moveViewName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.guideTextStyle}>{guideText}</Text>
      <TouchableOpacity onPress={moveSreen} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
