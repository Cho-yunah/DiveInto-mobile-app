import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

import { styles } from './styles';
import { userInfoProps } from './types';
import { HeaderContainer, MainContainer } from '@/src/components/ProfileMain';
import instance from '@/src/lib/api/axios';
import { phoneState } from '@/src/recoil/ProfileStack';

import AsyncStorage from '@react-native-community/async-storage';

export default function ProfileMain() {
  const [userInfo, setUserInfo] = useState<userInfoProps | null>({
    email: '',
    nickname: '',
    phone: '',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        const res = await instance.get('/account', {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjU3Njg2ODYsInVzZXJfbmFtZSI6IjciLCJhdXRob3JpdGllcyI6WyJST0xFX1NUVURFTlQiXSwianRpIjoiYjc2YjViOWQtNGYxZi00NzRiLThiN2ItMjQ3NDM5YzcxZDk5IiwiY2xpZW50X2lkIjoiYXV0aF9pZCIsInNjb3BlIjpbInJlYWQiXX0.fA9n_q2xy9FagSGO9KPH1D7ORy7THyQP-Nfhirm_AfE',
          },
        });

        setUserInfo(state => ({
          ...state,
          email: res.data.email,
          nickname: res.data.nickName,
          phone: res.data.phoneNumber,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, []);

  return (
    <RecoilRoot>
      {userInfo && (
        <SafeAreaView style={styles.container}>
          <HeaderContainer currScreen={'main'} buttonText="사진수정" />
          <MainContainer
            email={userInfo.email}
            nickname={userInfo.nickname}
            phone={userInfo.phone}
          />
        </SafeAreaView>
      )}
    </RecoilRoot>
  );
}
