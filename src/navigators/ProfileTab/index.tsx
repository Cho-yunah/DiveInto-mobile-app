import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LecturerQuestionScreen from '@/src//screens/FAQ/LecturerQuestion';
import ManualScreen from '@/src/screens/FAQ/Manual';
import ComplainScren from '@/src/screens/FAQ/Complain';
import ETCScreen from '@/src/screens/FAQ/ETC';
import TabBar from '@/src/screens/FAQ/TabBar';

const Tab = createMaterialTopTabNavigator();

export default function ProfileTab() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="LecturerQuestion"
        component={LecturerQuestionScreen}
        options={{ title: '강사문의' }}
      />
      <Tab.Screen
        name="Manual"
        component={ManualScreen}
        options={{ title: '앱이용' }}
      />
      <Tab.Screen
        name="Complain"
        component={ComplainScren}
        options={{ title: '불편문의' }}
      />
      <Tab.Screen
        name="ETC"
        component={ETCScreen}
        options={{ title: '기타' }}
      />
    </Tab.Navigator>
  );
}
