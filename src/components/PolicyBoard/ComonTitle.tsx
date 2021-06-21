import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

import { commonTitle as styles } from './styles';
import { CommonTitleProps } from './types';

export default function ComonTitle({
  title,
  movePolicyScreen,
}: CommonTitleProps) {
  const navigation = useNavigation();

  const onPress = () => {
    movePolicyScreen();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.titleButton}>
        <Text style={styles.titleText}>{title}</Text>
        <Entype name={'chevron-right'} size={15} color={'#6A6D70'} />
      </TouchableOpacity>
    </View>
  );
}
