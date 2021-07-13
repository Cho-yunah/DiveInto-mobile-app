import React, { Suspense } from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot, useRecoilValue } from 'recoil';

import ProfileWithoutLoginScreen from '@/src/screens/ProfileWithoutLogin';
import ProfileMainScreen from '@/src/screens/ProfileMain';
import NoticeListScreen from '@/src/screens/NoticeList';
import ProfileTab from '@/src/navigators/ProfileTab';
import BusinessPolicyScreen from '@/src/screens/Policies/BusinessPolicy';
import PolicyScreen from '@/src/screens/Policies';
import ServicePolicyScreen from '@/src/screens/Policies/ServicePolicy';
import FTPolicyScreen from '@/src/screens/Policies/FTPolicy';
import PrivacyPolicyScreen from '@/src/screens/Policies/PrivacyPolicy';
import ApplyLecturerScreen from '@/src/screens/ApplyLecturer';
import ModifyNumScreen from '@/src/screens/ModifyNum';
import DetailNoticeScreen from '@/src/screens/DetailNotice';
import LectureCollectionScreen from '@/src/screens/FindAllReiew/LectureCollection';
import ReviewCollectionScreen from '@/src/screens/FindAllReiew/ReviewCollection';
import LikeCollectionScreen from '@/src/screens/LikeCollection';
import { IsInstructor } from '@/src/recoil/Global';
// import DetailPoliciesScreen from '@/src/screens/DetailPolicies';

const Stack = createStackNavigator();

export default function ProfileStack<ProfileStak>() {
  const temp = useRecoilValue(IsInstructor);

  // console.log(temp, 'temp');

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
        {/* Profile Main View */}
        <Stack.Screen
          name="ProfileMain"
          component={ProfileMainScreen}
          options={{ headerShown: false }}
        />

        {/* 번호 변경 모달 View */}
        <Stack.Screen
          name="ModifyNum"
          component={ModifyNumScreen}
          options={{ title: '휴대폰 번호 변경' }}
        />

        {/* 강사 자신의 강의 리스트 조회 */}
        <Stack.Screen
          name="FindAllReview"
          component={LectureCollectionScreen}
          options={{
            title: '후기 모아보기',
          }}
        />
        {/* 한 강의에 관한 리뷰 모아보기 */}
        <Stack.Screen
          name="ReviewCollection"
          component={ReviewCollectionScreen}
          options={{
            title: '후기 리스트',
          }}
        />

        {/* 강사 신청 View */}
        <Stack.Screen
          name="ApplyLecturer"
          component={ApplyLecturerScreen}
          options={{
            title: '강사신청',
          }}
        />

        {/* 좋아요 목록 View */}
        <Stack.Screen
          name="LikeCollection"
          component={LikeCollectionScreen}
          options={{ title: '좋아요 목록' }}
        />

        {/* 공지 사항 리스트, 상세 View */}
        <Stack.Screen
          name="NoticeList"
          component={NoticeListScreen}
          options={{
            title: '공지사항',
          }}
        />
        <Stack.Screen
          name="DetailNotice"
          component={DetailNoticeScreen}
          options={{
            title: '세부사항',
          }}
        />

        <Stack.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            title: '자주 묻는 질문',
          }}
        />

        {/* 약관 및 정책 관련 View Stack */}
        <Stack.Screen
          name="Policy"
          component={PolicyScreen}
          options={{
            title: '이용약관 및 정책',
          }}
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

        {/* Profile 비회원 View */}
        <Stack.Screen
          name="ProfileWithoutLogin"
          component={ProfileWithoutLoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
