import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';

import ProfileWithoutLoginScreen from '../../screens/ProfileWithoutLogin';
import ProfileMainScreen from '../../screens/ProfileMain';

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
          headerTintColor: '#fefefe',
        }}
      >
        <Stack.Screen
          name="ProfileMain"
          component={ProfileMainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileWithoutLogin"
          component={ProfileWithoutLoginScreen}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
