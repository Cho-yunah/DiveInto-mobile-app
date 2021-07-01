import React from 'react';
import { View } from 'react-native';

import {
  PhoneInput,
  NicknameInput,
  GenderBtn,
  CustomDatePicker,
} from '@components/MemberInfo';
import styles from './styles';

import { MemberInfoProps } from '@navigators/LoginStack/types';
import NextButton from '@components/common/NextButton';

const MemberInfoScreen = ({ navigation }: MemberInfoProps) => {
  const onPress = () => {};

  navigation.setOptions({
    headerRight: () => <NextButton onPress={onPress} text="완료" />,
  });

  return (
    <View style={styles.conatiner}>
      <PhoneInput />
      <NicknameInput />
      <GenderBtn />
      <CustomDatePicker />
    </View>
  );
};
export default MemberInfoScreen;
