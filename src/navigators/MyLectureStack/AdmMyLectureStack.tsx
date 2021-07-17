import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootAdmMyLectureStack } from './types';

const Stack = createStackNavigator<RootAdmMyLectureStack>();

import {
  AdmMyLectureList,
  AddLecture,
  AddLecture2,
  AddEqipments,
} from '@screens/Instructor';

export default function AdmMyLectureStack() {
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
      </Stack.Navigator>
    </RecoilRoot>
  );
}
