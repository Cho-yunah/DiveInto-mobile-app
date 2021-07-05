import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { RootCommunityStack } from './types';

import CommunityMainScreen from '@screens/CommunityMain';
import CommunityPostingScreen from '@screens/CommunityPosting';
import CommunityDetailScreen from '@screens/CommunityDetail';
// import { createIconSetFromFontello } from 'react-native-vector-icons';

const Stack = createStackNavigator<RootCommunityStack>();

export default function CommunityStack({navigation,route}) {

  // community posting, community detail page 일때,
  // bottom navigation bar hiding
  // console.log(route.state && route.state.index)
  navigation.setOptions(
    route.state && route.state.index === 1? {tabBarVisible: false} : {tabBarVisible: true}
  )

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
            title: '글 제목',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
