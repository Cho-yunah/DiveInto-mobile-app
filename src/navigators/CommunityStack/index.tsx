import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootCommunityStack } from './types';

import CommunityMainScreen from '@screens/CommunityMain';
import CommunityPostingScreen from '@screens/CommunityPosting';
import CommunityDetailScreen from '@screens/CommunityDetail';
import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { IsLogin } from '@/src/recoil/Global';

const Stack = createStackNavigator<RootCommunityStack>();

export default function CommunityStack({ navigation, route }: any) {
  // community posting, community detail page 일때,
  // bottom navigation bar hiding

  const confirmIsLogin = useRecoilValue(IsLogin);
  console.log(confirmIsLogin, '로그인 확인/커뮤니티');

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    navigation.setOptions(
      (routeName && routeName === 'CommunityDetail'
        ? { tabBarVisible: false }
        : { tabBarVisible: true }) ||
        (routeName && routeName === 'CommunityPosting'
          ? { tabBarVisible: false }
          : { tabBarVisible: true }),
    );
  }, [navigation, route]);

  return (
    <RecoilRoot override={false}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#50CAD2',
            height: 88,
            // width: '100%',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            height: 21,
            flex: 1,
            alignSelf:'center'
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
            title: '커뮤니티 상세',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
