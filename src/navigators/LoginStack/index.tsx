import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootLoginStack, SetPasswordProps } from './types';

import LoginScreen from '../../screens/Login';
import LoginWithEmailScreen from '@/src/screens/LoginWithEmail';
import ProfileWithoutLogin from '@/src/components/ProfileWithoutLogin';
import SetPasswordScreen from '@/src/screens/SetPassword';
import Button from '@/src/legacy/Containers/common/Button';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

const Stack = createStackNavigator<RootLoginStack>();

export default function LoginStack() {
  // const navigation = useNavigation();

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
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
        <Stack.Screen 
          name="SetPassword" 
          component={SetPasswordScreen}
          options={({ route }) => ({
            title: '이메일로 회원가입',
          })}
        />
        
      </Stack.Navigator>
    </RecoilRoot>
  );
}
