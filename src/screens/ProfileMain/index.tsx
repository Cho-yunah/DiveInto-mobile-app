import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from './styles';
import { userInfoProps } from './types';
import { PhoneNumState } from '@recoil/ProfileStack/store';
import { modifyNumViewStateAtom, atkState } from '@recoil/ProfileStack/store';
import { HeaderContainer, MainContainer } from '@components/ProfileMain';
import { IsInstructor } from '@/src/recoil/Global';
import { profileMainMultipleEval } from '@/src/recoil/ProfileStack/dataFetch';
import withSuspense from '@/src/lib/HOC/withSuspense';

function ProfileMain() {
  const isInstructor = useRecoilValue(IsInstructor);
  const setPhoneNum = useSetRecoilState(PhoneNumState);
  const [userInfo, setUserInfo] = useState<userInfoProps | undefined>({
    email: '',
    nickname: '',
    phone: '',
  });
  const setModifyNumViewState = useSetRecoilState(modifyNumViewStateAtom);
  const { userInfo: data } = useRecoilValue(profileMainMultipleEval);

  useEffect(() => {
    console.log(data);

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
  }, []);

  return (
    <>
      {userInfo && (
        <View style={styles.container}>
          <HeaderContainer currScreen="main" buttonText="사진수정" />
          <MainContainer
            email={userInfo?.email}
            nickname={userInfo?.nickname}
            phone={userInfo?.phone}
            type={isInstructor ? 'instructor' : 'student'}
          />
        </View>
      )}
    </>
  );
}

export default withSuspense(ProfileMain);
