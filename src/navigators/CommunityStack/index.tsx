import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootCommunityStack } from './types';

import CommunityListScreen from '@/src/screens/CommunityList';

const Stack = createStackNavigator<RootCommunityStack>();

export default function CommunityStack() {
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
          name="CommunityList"
          component={CommunityListScreen}
          options={{
            title: '커뮤니티',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
