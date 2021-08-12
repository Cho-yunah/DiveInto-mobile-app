import { IsLogin } from '@/src/recoil/Global';
import WriteReviewScreen from '@/src/screens/WriteReview';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { ReviewStack } from './types';

const Stack = createStackNavigator();

export default function ReviewStack<ReviewStack>() {
  const confirmIsLogin = useRecoilValue(IsLogin);
  console.log(confirmIsLogin, '로그인 확인/리뷰');

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
          name="WriteReview"
          component={WriteReviewScreen}
          options={{
            title: '후기작성하기',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
