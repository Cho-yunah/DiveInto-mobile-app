import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LectureCollectionScreen from '@screens/FindAllReiew/LectureCollection';

const Tab = createMaterialTopTabNavigator();

export default function ManagementLectureTap() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 18 },
        activeTintColor: '#50CAD2',

        inactiveTintColor: '#6A6D70',
        indicatorStyle: {
          borderColor: '#50CAD2',
          borderWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="NextLecture"
        component={Temp}
        options={{ title: '정산 관리' }}
      />

      <Tab.Screen
        name="FindAllReview"
        component={LectureCollectionScreen}
        options={{ title: '리뷰 관리' }}
      />
    </Tab.Navigator>
  );
}

const Temp = () => (
  <View>
    <Text>하이</Text>
  </View>
);
