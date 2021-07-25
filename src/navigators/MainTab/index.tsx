import React from 'react';
import { View, Text } from 'react-native';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootMainTab } from './types';
import * as colors from '@config/colors';

import { IsInstructor } from '@recoil/Global';

// navigators
import LectureStack from '@navigators/LectureStack';
import { AdmMyLectureStack } from '@navigators/MyLectureStack';
import CommunityStack from '../CommunityStack';
import ProfileStack from '@navigators/ProfileStack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator<RootMainTab>();

export default function LoginStack() {
  const isInstructor = useRecoilValue(IsInstructor);
  console.log(isInstructor);

  return (
    <RecoilRoot>
      <Tab.Navigator
        tabBarOptions={{
          adaptive: true,
          activeTintColor: colors.PointBlue,
          inactiveTintColor: colors.Gray2,
          labelStyle: { fontSize: 12 },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            IconSelector({ focused, color, size, routeName: route.name }),
        })}
        // initialRouteName=""
      >
        {/* 탭 이름은 같더라도 강사와 수강생 뷰가 다를 수 있어서 구분해놨으나, 동일하라면 강의후기에만 조건문 걸면 됨. */}
        {isInstructor ? (
          <>
            <Tab.Screen name="홈" component={LectureStack} />
            <Tab.Screen name="강의일정" component={AdmMyLectureStack} />
            <Tab.Screen name="커뮤니티" component={CommunityStack} />
            <Tab.Screen name="강의후기" component={Tmp} />
            <Tab.Screen name="프로필" component={ProfileStack} />
          </>
        ) : (
          <>
            <Tab.Screen name="홈" component={LectureStack} />
            <Tab.Screen name="커뮤니티" component={CommunityStack} />
            <Tab.Screen name="강의일정" component={Tmp} />
            <Tab.Screen name="프로필" component={ProfileStack} />
          </>
        )}
      </Tab.Navigator>
    </RecoilRoot>
  );
}

// 빈 탭 추가용도. 해당 파트의 스택이 완성되면 대체.
const Tmp = () => (
  <View>
    <Text>hi</Text>
  </View>
);

const IconSelector = ({
  focused,
  color,
  size,
  routeName,
}: {
  focused: boolean;
  color: string;
  size: number;
  routeName: '홈' | '커뮤니티' | '강의일정' | '강의후기' | '프로필';
}) => {
  switch (routeName) {
    case '홈':
      return (
        <Ionicons
          name={focused ? 'home-sharp' : 'home-outline'}
          size={30}
          color={focused ? colors.PointBlue : colors.Gray2}
        />
      );
    case '커뮤니티':
      return (
        <Ionicons
          name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
          size={30}
          color={focused ? colors.PointBlue : colors.Gray2}
        />
      );
    case '강의일정':
      return (
        <MaterialCommunityIcons
          name={focused ? 'calendar-month' : 'calendar-month-outline'}
          size={30}
          color={focused ? colors.PointBlue : colors.Gray2}
        />
      );
    case '강의후기':
      return (
        <Ionicons
          name={focused ? 'add-circle' : 'add-circle-outline'}
          size={30}
          color={focused ? colors.PointBlue : colors.Gray2}
        />
      );
    case '프로필':
      return (
        <MaterialIcons
          name={focused ? 'person' : 'person-outline'}
          size={40}
          color={focused ? colors.PointBlue : colors.Gray2}
        />
      );
  }
};
