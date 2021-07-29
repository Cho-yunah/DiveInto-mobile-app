import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { LectureInfoProps } from '@navigators/MyLectureStack/LectureInfoTab/types';

import { useSetRecoilState } from 'recoil';
import { CurrentTab } from '@recoil/Instructor/LectureInfo';
export function AllSchedule({ navigation, route }: LectureInfoProps) {
  const setCurrentTab = useSetRecoilState(CurrentTab);
  useLayoutEffect(() => {
    navigation.addListener('focus', () => {
      console.log('전체일정 포커스');
      setCurrentTab('전체일정');
    });
  }, []);

  return (
    <View>
      <Text>hi</Text>
    </View>
  );
}
