import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootCommunityStack } from './types';

import CommunityMainScreen from '@screens/CommunityMain';
import CommunityPostingScreen from '@screens/CommunityPosting';
import CommunityDetailScreen from '@screens/CommunityDetail';
import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator<RootCommunityStack>();

export default function CommunityStack({navigation,route}: any) {

  // community posting, community detail page 일때,
  // bottom navigation bar hiding
  useEffect (()=> {
    const routeName = getFocusedRouteNameFromRoute(route);
    navigation.setOptions(
      (routeName && routeName === 'CommunityDetail'? { tabBarVisible: false} : {tabBarVisible: true}) ||
      (routeName && routeName === 'CommunityPosting'? {tabBarVisible: false} : {tabBarVisible: true})
    )
  },[navigation, route]) 

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
          component={CommunityDetailScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
