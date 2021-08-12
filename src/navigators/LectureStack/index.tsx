import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootLectureStack } from './types';

import MainList from '@screens/MainList';
import LectureDetailScreen from '@/src/screens/LectureDetail';
import ReserveLectureScreen from '@/src/screens/ReserveLecture';
import RequestPaymentScreen from '@/src/screens/RequestPayment';
import DetailReservationScreen from '@/src/screens/DetailReservation';

const Stack = createStackNavigator<RootLectureStack>();

export default function LectureStack() {
  return (
    // <RecoilRoot>
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
      <Stack.Screen
        name="MainList"
        component={MainList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LectureDetail"
        component={LectureDetailScreen}
        options={{ title: '강의 제목' }}
      />
      <Stack.Screen
        name="ReserveLecture"
        component={ReserveLectureScreen}
        options={{ title: '강의 예약' }}
      />
      <Stack.Screen
        name="RequestPayment"
        component={RequestPaymentScreen}
        options={{ title: '결제 요청' }}
      />
      <Stack.Screen
        name="DetailReservation"
        component={DetailReservationScreen}
        options={{ title: '예약 상세' }}
      />
    </Stack.Navigator>
    // </RecoilRoot>
  );
}
