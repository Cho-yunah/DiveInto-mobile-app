import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from './styles';
import instance from '@lib/api/axios';
import { ProfileMainProps } from '@navigators/ProfileStack/types';
import { userInfoProps } from './types';
import {
  atkState,
  modifyNumViewStateAtom,
  PhoneNumState,
} from '@recoil/ProfileStack';
import { HeaderContainer, MainContainer } from '@components/ProfileMain';

export default function ProfileMain({ navigation }: ProfileMainProps) {
  const [isInstructor, setIsInstructor] = useState<string | null>(null);
  const setAtk = useSetRecoilState(atkState);
  const setPhoneNum = useSetRecoilState(PhoneNumState);
  const [userInfo, setUserInfo] = useState<userInfoProps | undefined>({
    email: '',
    nickname: '',
    phone: '',
  });
  const setModifyNumViewState = useSetRecoilState(modifyNumViewStateAtom);

  console.log(userInfo?.phone);

  useEffect(() => {
    console.log('프로필 연결');

    const getUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem('atk');
        const instructor = await AsyncStorage.getItem('instructor');

        setAtk(token);
        setIsInstructor(instructor);

        const { data } = await instance.get('/account', {
          headers: {
            Authorization: token,
          },
        });

        setUserInfo(state => ({
          ...state,
          email: data.email,
          nickname: data.nickName,
          phone: data.phoneNumber,
        }));

        setModifyNumViewState({
          phoneNumber: data.phoneNumber,
          birth: data.birth,
          gender: data.gender,
        });

        setPhoneNum(data.phoneNumber);
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, [userInfo?.phone]);

  return (
    <>
      {userInfo && (
        <SafeAreaView style={styles.container}>
          <HeaderContainer currScreen="main" buttonText="사진수정" />
          <MainContainer
            email={userInfo?.email}
            nickname={userInfo?.nickname}
            phone={userInfo?.phone}
            type={isInstructor === 'instructor' ? 'instructor' : 'student'}
          />
        </SafeAreaView>
      )}
    </>
  );
}
