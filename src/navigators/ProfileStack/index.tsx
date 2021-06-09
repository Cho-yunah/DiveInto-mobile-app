import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';

import ProfileWithoutLoginScreen from '../../screens/ProfileWithoutLogin';
import ProfileMainScreen from '../../screens/ProfileMain';
import NoticeListScreen from '../../screens/NoticeList';
import ProfileTab from '../ProfileTab';

const Stack = createStackNavigator();

export default function ProfileStack<ProfileStak>() {
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
        initialRouteName="topTab"
      >
        <Stack.Screen
          name="ProfileMain"
          component={ProfileMainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NoticeList"
          component={NoticeListScreen}
          options={{
            title: '공지사항',
          }}
        />

        <Stack.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            title: '자주 묻는 질문',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
