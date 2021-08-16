import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootLectureStack } from './types';

import MainList from '@screens/MainList';
import LectureDetailScreen from '@/src/screens/LectureDetail';
import ReserveLectureScreen from '@/src/screens/ReserveLecture';
import RequestPaymentScreen from '@/src/screens/RequestPayment';
import WriteReviewScreen from '@/src/screens/WriteReview';
import { IsLogin } from '@/src/recoil/Global';

const Stack = createStackNavigator<RootLectureStack>();

export default function LectureStack() {
  const confirmIsLogin = useRecoilValue(IsLogin);
  console.log(confirmIsLogin, '로그인 확인/강의 상세');

  return (
    <RecoilRoot override={false}>
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
      </Stack.Navigator>
    </RecoilRoot>
  );
}
