import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';

import ProfileWithoutLoginScreen from '../../screens/ProfileWithoutLogin';
import ProfileMainScreen from '../../screens/ProfileMain';
import NoticeListScreen from '../../screens/NoticeList';
import ProfileTab from '../ProfileTab';
import BusinessPolicyScreen from '@/src/screens/Policies/BusinessPolicy';
import PolicyScreen from '@/src/screens/Policies';
import ServicePolicyScreen from '@/src/screens/Policies/ServicePolicy';
import FTPolicyScreen from '@/src/screens/Policies/FTPolicy';
import PrivacyPolicyScreen from '@/src/screens/Policies/PrivacyPolicy';
import ApplyLecturerScreen from '@/src/screens/ApplyLecturer';

const Stack = createStackNavigator();

export default function ProfileStack<ProfileStak>() {
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
          name="ProfileMain"
          component={ProfileMainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ApplyLecturer"
          component={ApplyLecturerScreen}
          options={{
            title: '강사신청',
          }}
        />
        <Stack.Screen
          name="NoticeList"
          component={NoticeListScreen}
          options={{
            title: '공지사항',
          }}
        />
        <Stack.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            title: '자주 묻는 질문',
          }}
        />
        <Stack.Screen
          name="Policy"
          component={PolicyScreen}
          options={{ title: '이용약관 및 정책' }}
        />
        <Stack.Screen
          name="BusinessPolicy"
          component={BusinessPolicyScreen}
          options={{
            title: '풍덩 사업자정보',
          }}
        />
        <Stack.Screen
          name="ServicePolicy"
          component={ServicePolicyScreen}
          options={{
            title: '이용약관',
          }}
        />
        <Stack.Screen
          name="FTPolicy"
          component={FTPolicyScreen}
          options={{
            title: '전자금융거래 이용약관',
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{
            title: '개인정보 처리방침',
          }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
