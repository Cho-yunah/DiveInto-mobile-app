import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';

import * as Color from '@config/colors';
import * as getDimension from '@config/windowDimention';

import ManagementLectureTap from '@screens/ManagementLecture';
import ReviewCollectionScreen from '@screens/FindAllReiew/ReviewCollection';

const Stack = createStackNavigator();

export default function ManagementLectureStack() {
  return (
    <RecoilRoot>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Color.PointBlue,
            height: getDimension.HEIGHT * 0.1,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            height: 21,
          },
          headerTitleAlign: 'center',
          headerBackTitle: '뒤로',
          headerBackTitleStyle: {
            fontWeight: 'bold',
            backgroundColor: '#50CAD2',
          },
          headerTintColor: '#fefefe',
        }}
      >
        {/* 강의 일정 View */}
        <Stack.Screen
          name="LectureSchedule"
          component={ManagementLectureTap}
          options={{ title: '강의 관리' }}
        />

        {/* 한 강의에 관한 리뷰 모아보기 */}
        <Stack.Screen
          name="ReviewCollection"
          component={ReviewCollectionScreen}
          options={{
            title: '후기 리스트',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
