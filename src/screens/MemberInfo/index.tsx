import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import {
  PhoneInput,
  NicknameInput,
  GenderBtn,
  CustomDatePicker,
} from '@components/MemberInfo';
import styles from './styles';
import instance from '@/src/lib/api/axios';
import { MemberInfoProps } from '@navigators/LoginStack/types';
import NextButton from '@components/common/NextButton';
import { createUserSelector } from '@/src/recoil/LoginStack';

const MemberInfoScreen = ({ navigation }: MemberInfoProps) => {
  const userInfo = useRecoilValue(createUserSelector);
  const [isCompleted, setIsCompleted] = useState(false);

  const onPress = async () => {
    setIsCompleted(Object.values(userInfo).every(value => value));

    try {
      const res = await instance.post('/sign/sign-up', userInfo);
      navigation.navigate('Login');
    } catch (err) {
      console.error(err);
    }
  };

  navigation.setOptions({
    headerRight: () => (
      <NextButton onPress={onPress} text="완료" disable={!isCompleted} />
    ),
  });

  return (
    <View style={styles.conatiner}>
      <ScrollView>
        <PhoneInput />
        <NicknameInput />
        <GenderBtn />
        <CustomDatePicker />
      </ScrollView>
    </View>
  );
};
export default MemberInfoScreen;
