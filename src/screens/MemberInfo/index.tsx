import React, { useState } from 'react';
import { View } from 'react-native';
import { MemberInfoProps } from '@navigators/LoginStack/types';
import styles from './styles';

import {
  PhoneInput,
  CertificationInput,
  NicknameInput,
  GenderBtn,
  CustomDatePicker,
} from '@components/MemberInfo';

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
