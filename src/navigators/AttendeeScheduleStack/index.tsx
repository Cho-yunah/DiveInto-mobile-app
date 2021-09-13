import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';

import * as Color from '@config/colors';
import * as getDimension from '@config/windowDimention';
import LectureScheduleScreen from '@screens/LectureSchedule';
import DetailReservationScreen from '@screens/DetailReservation';
import WriteReviewScreen from '@screens/WriteReview';

const Stack = createStackNavigator();

export default function AttendeeScheduleStack() {
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
          component={LectureScheduleScreen}
          options={{ title: '강의 일정' }}
        />
        {/* 예약한 강의 세부 사항 View */}
        <Stack.Screen
          name="DetailReservation"
          component={DetailReservationScreen}
          options={{ title: '예약 상세 정보' }}
        />

        {/* 리뷰 작성하기 스크린 */}
        <Stack.Screen
          name="WriteReview"
          component={WriteReviewScreen}
          options={{
            title: '후기 작성',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
