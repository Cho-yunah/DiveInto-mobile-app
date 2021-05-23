import React from 'react';
import { View } from 'react-native';

import {
  PhoneInput,
  CertificationInput,
  NicknameInput,
  GenderBtn,
  CustomDatePicker,
} from '@components/MemberInfo';

import { MemberInfoProps } from '@navigators/LoginStack/types';
import styles from './styles';

const MemberInfoScreen = ({ navigation }: MemberInfoProps) => {
  return (
    <View style={styles.conatiner}>
      <PhoneInput />
      <CertificationInput />
      <NicknameInput />
      <GenderBtn />
      <CustomDatePicker />
    </View>
  );
};
export default MemberInfoScreen;
