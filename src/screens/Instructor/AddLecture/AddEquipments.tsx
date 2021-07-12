import React, { useState, useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Background } from '@config/colors';
import { AddEquipProps } from '@navigators/MyLectureStack/types';

import NextButton from '@components/common/NextButton';

export function AddEqipments({ navigation }: AddEquipProps) {
  useLayoutEffect(() => {
    const onPress = () => {};
    navigation.setOptions({
      title: '강의등록',
      headerRight: () => <NextButton onPress={onPress} text="완료" />,
    });
  }, []);

  return (
    <ScrollView>
      <Text>hi</Text>
    </ScrollView>
  );
}
