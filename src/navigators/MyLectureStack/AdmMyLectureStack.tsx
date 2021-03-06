import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootAdmMyLectureStack } from './types';

const Stack = createStackNavigator<RootAdmMyLectureStack>();

import {
  AdmMyLectureList,
  AddLecture,
  AddLecture2,
  AddEqipments,
  AddLocation,
  NMapSearch,
  EditLecture,
  AddSchedule,
} from '@screens/Instructor';
import { LectureInfoTab } from './LectureInfoTab';
import { IsLogin } from '@/src/recoil/Global';

export default function AdmMyLectureStack() {
  const confirmIsLogin = useRecoilValue(IsLogin);
  console.log(confirmIsLogin, '로그인 확인/강의');

  return (
    <RecoilRoot>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#50CAD2',
            height: 88,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            height: 21,
          },
          headerBackTitle: '뒤로',
          headerBackTitleStyle: {
            fontWeight: 'bold',
            backgroundColor: '#50CAD2',
          },
          headerTintColor: '#fefefe',
        }}
      >
        <Stack.Screen name="강의목록" component={AdmMyLectureList} />
        <Stack.Screen name="강의등록" component={AddLecture} />
        <Stack.Screen name="강의등록2" component={AddLecture2} />
        <Stack.Screen name="장비등록" component={AddEqipments} />
        <Stack.Screen name="위치등록" component={AddLocation} />
        <Stack.Screen name="위치검색" component={NMapSearch} />
        <Stack.Screen name="강의정보관리" component={LectureInfoTab} />
        <Stack.Screen name="강의수정" component={EditLecture} />
        <Stack.Screen name="일정추가" component={AddSchedule} />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
