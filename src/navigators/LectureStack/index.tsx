import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootLectureStack } from './types';

import MainList from '@screens/MainList';
import {
  NewLectureMore,
  PopularLectureMore,
} from '@screens/MainList/MoreLecture';
import { KeywordSearch, FilterSearch } from '@screens/Search';
import LectureDetailScreen from '@/src/screens/LectureDetail';
import ReserveLectureScreen from '@/src/screens/ReserveLecture';
import RequestPaymentScreen from '@/src/screens/RequestPayment';
import DetailReservationScreen from '@/src/screens/DetailReservation';
import { IsLogin } from '@/src/recoil/Global';
import * as getDimension from '@config/windowDimention';

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
        <Stack.Screen
          name="MainList"
          component={MainList}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="강의 키워드 검색" component={KeywordSearch} />
        <Stack.Screen name="강의 필터 검색" component={FilterSearch} />
        <Stack.Screen name="새로운 강의 더보기" component={NewLectureMore} />
        <Stack.Screen name="인기 강의 더보기" component={PopularLectureMore} />
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
    </RecoilRoot>
  );
}
