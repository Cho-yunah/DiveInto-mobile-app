import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from './styles';
import instance from '@lib/api/axios';
import { ProfileMainProps } from '@navigators/ProfileStack/types';
import { userInfoProps } from './types';
import { atkState } from '@recoil/ProfileStack';
import { HeaderContainer, MainContainer } from '@components/ProfileMain';

export default function ProfileMain({ navigation }: ProfileMainProps) {
  const [isInstructor, setIsInstructor] = useState<string | null>(null);
  const setAtk = useSetRecoilState(atkState);
  const [userInfo, setUserInfo] = useState<userInfoProps | undefined>({
    email: '',
    nickname: '',
    phone: '',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem('atk');
        const instructor = await AsyncStorage.getItem('instructor');

        setAtk(token);
        setIsInstructor(instructor);

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
            type={isInstructor === 'instructor' ? 'instructor' : 'student'}
            // type={true ? 'instructor' : 'student'}
          />
        </SafeAreaView>
      )}
    </>
  );
}
