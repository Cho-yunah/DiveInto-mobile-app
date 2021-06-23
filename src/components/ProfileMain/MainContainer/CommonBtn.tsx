import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { commonButton as styles } from './styles';
import { CommonBtnProps } from './types';

export default function CommonBtn({ title, moveNavigation }: CommonBtnProps) {
  const onPress = () => {
    moveNavigation();
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
      <AntDesign name="right" size={12} color={'#6A6D70'} />
    </TouchableOpacity>
  );
}
