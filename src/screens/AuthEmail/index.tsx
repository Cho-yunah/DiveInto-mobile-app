import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import {
  HeaderText,
  EmailInput,
  CertificationInput,
  ErrorMessage,
} from '@components/AuthEamil';
import { AuthEmailProps } from '@navigators/LoginStack/types';
import NextButton from '@components/common/NextButton';
import { isCertification } from '@/src/recoil/LoginStack';
export default function AuthEmailScreen({ navigation }: AuthEmailProps) {
  const certification = useRecoilValue(isCertification);

  const onPress = () => {
    navigation.navigate('SetPassword');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NextButton onPress={onPress} disable={certification} />
      ),
    });
  }, [onPress, certification]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderText />
        <EmailInput />
        <CertificationInput />
        <ErrorMessage />
      </ScrollView>
    </View>
  );
}
