import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootLoginStack } from './types';

import LoginScreen from '@screens/Login';
import LoginWithEmailScreen from '@screens/LoginWithEmail';
import SetPasswordScreen from '@screens/SetPassword';
import MemberInfoScreen from '@screens/MemberInfo';
import WriteReviewScreen from '@/src/screens/WriteReview';

const Stack = createStackNavigator<RootLoginStack>();

export default function LoginStack() {
  return (
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
          name="Login"
          component={LoginScreen}
          options={{
            title: '로그인/회원가입',
          }}
        />
        <Stack.Screen
          name="LoginWithEmail"
          component={LoginWithEmailScreen}
          options={{
            title: '이메일로 로그인',
          }}
        />
        <Stack.Screen
          name="SetPassword"
          component={SetPasswordScreen}
          options={{
            title: '비밀번호 설정',
          }}
        />
        <Stack.Screen
          name="MemberInfo"
          component={MemberInfoScreen}
          options={{ title: '회원정보기입' }}
        />
      </Stack.Navigator>
  );
}