import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootLoginStack } from './types';

import LoginScreen from '@screens/Login';
import LoginWithEmailScreen from '@screens/LoginWithEmail';
import SetPasswordScreen from '@screens/SetPassword';
import AuthEmailScreen from '@screens/AuthEmail';
import MemberInfoScreen from '@screens/MemberInfo';
import ForgotPasswordScreen from '@/src/screens/ForgotPassword';
import * as getDimension from '@config/windowDimention';

const Stack = createStackNavigator<RootLoginStack>();

export default function LoginStack() {
  return (
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
      // initialRouteName="ForgotPassword"
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
        name="AuthEamil"
        component={AuthEmailScreen}
        options={{ title: '이메일 주소 인증' }}
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
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: '비밀번호 찾기' }}
      />
    </Stack.Navigator>
  );
}
