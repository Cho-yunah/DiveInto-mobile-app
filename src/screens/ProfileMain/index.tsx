import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from './styles';
import { userInfoProps } from './types';
import { atkState } from '@/src/recoil/ProfileStack';
import { HeaderContainer, MainContainer } from '@/src/components/ProfileMain';
import instance from '@/src/lib/api/axios';

export default function ProfileMain() {
  console.log('main component start');

  const setAtk = useSetRecoilState(atkState);
  const [userInfo, setUserInfo] = useState<userInfoProps | undefined>({
    email: '',
    nickname: '',
    phone: '',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        setAtk(token);

        const res = await instance.get('/account', {
          headers: {
            Authorization: token,
          },
        });

        setUserInfo(state => ({
          ...state,
          email: res.data.email,
          nickname: res.data.nickName,
          phone: res.data.phoneNumber,
        }));

        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, []);

  return (
    <>
      {userInfo && (
        <SafeAreaView style={styles.container}>
          <HeaderContainer currScreen={'main'} buttonText="사진수정" />
          <MainContainer
            email={userInfo?.email}
            nickname={userInfo?.nickname}
            phone={userInfo?.phone}
          />
        </SafeAreaView>
      )}
    </>
  );
}
