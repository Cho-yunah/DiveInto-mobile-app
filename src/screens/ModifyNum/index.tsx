import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';
import { ModifyNumProps } from '@navigators/ProfileStack/types';
import NextButton from '@components/common/NextButton';

export default function ModifyNumScreen({ navigation }: ModifyNumProps) {
  const onPress = () => {
    console.log('confirm');
  };

  navigation.setOptions({
    headerRight: () => <NextButton onPress={onPress} text="완료" />,
  });

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder="휴대폰 번호" />
    </View>
  );
}
