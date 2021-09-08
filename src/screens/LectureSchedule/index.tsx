import React, { Suspense } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { styles } from './styles';
import NextLectureScreen from './NextLecture';
import LastLectureScreen from './LastLecture';

const Tab = createMaterialTopTabNavigator();
export default function LectureScheduleScreen() {
  return (
    <View style={styles.container}>
      {/* <Suspense fallback={<CommonLoading />}> */}
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
          component={NextLectureScreen}
          options={{ title: '다음 강의' }}
        />

        <Tab.Screen
          name="LastLecture"
          component={LastLectureScreen}
          options={{ title: '지난 강의' }}
        />
      </Tab.Navigator>
      {/* </Suspense> */}
    </View>
  );
}
