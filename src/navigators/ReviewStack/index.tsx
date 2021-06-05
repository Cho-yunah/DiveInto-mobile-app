import WriteReviewScreen from '@/src/screens/WriteReview';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ReviewStack } from './types';

const Stack = createStackNavigator();

export default function ReviewStack<ReviewStack>() {
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
          name="WriteReview"
          component={WriteReviewScreen}
          options={{
            title: '후기작성하기',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
