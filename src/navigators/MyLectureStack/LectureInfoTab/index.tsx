import React, { useLayoutEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RootAdmMyLectureStack } from './types';
import { ScheduleStackProps } from '../types';

import NextButton from '@components/common/NextButton';

import { AllSchedule, MyLectureInfo } from '@screens/Instructor';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CurrentTab } from '@recoil/Instructor/LectureInfo';
import { lectureIdState } from '@recoil/Instructor/AllSchedule';

// const ScheduleTab = createMaterialTopTabNavigator<RootAdmMyLectureStack>();

export function LectureInfoTab({ navigation, route }: ScheduleStackProps) {
  const { lectureId } = route.params;
  const currentTab = useRecoilValue(CurrentTab);
  const setLectureId = useSetRecoilState(lectureIdState);
  console.log(lectureId);

  useLayoutEffect(() => {
    setLectureId(lectureId);
  }, []);

  useLayoutEffect(() => {
    const onEditPress = () => {
      console.log('강의등록 버튼 테스트');
      navigation.navigate('강의수정', { lectureId });
    };

    const onNewPress = () => {
      console.log('일정추가 버튼 테스트');
      console.log('현재 강의 id : ', lectureId);
      navigation.navigate('일정추가', { lectureId });
    };

    navigation.setOptions({
      title: '내 강의 목록',
      headerRight: () => (
        // currentTab === '강의정보' ? (
        //   <NextButton onPress={onEditPress} text="강의수정" disable />
        // ) : (
        <NextButton onPress={onNewPress} text="일정추가" disable />
      ),
      // ),
    });
  }, [currentTab]);

  return (
    lectureId && <AllSchedule />
    // (
    //   <ScheduleTab.Navigator>
    //     {/* <ScheduleTab.Screen name="강의정보" component={MyLectureInfo} /> */}
    //     <ScheduleTab.Screen name="강의일정" component={AllSchedule} />
    //   </ScheduleTab.Navigator>
    // )
  );
}
