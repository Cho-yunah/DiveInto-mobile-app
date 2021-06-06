import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootCommunityStack } from './types';

import CommunityMainScreen from '@/src/screens/CommunityMain';
import CommunityPostingScreen from '@/src/screens/CommunityPosting';
import { CommunityDetail } from '@/src/components/CommunityDetail';

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
          name="CommunityMain"
          component={CommunityMainScreen}
          options={{
            title: '커뮤니티',
          }}
        />
        <Stack.Screen
          name="CommunityPosting"
          component={CommunityPostingScreen}
          options={{
            title: '글작성하기',
          }}
        />
        <Stack.Screen
          name="CommunityDetail"
          component={CommunityDetail}
          options={{
            title: '글 제목',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
