import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import ShowOutputModal from './ShowOutputModal';
import { IsInstructor, IsLogin } from '@recoil/Global';
import {
  logoutModalOpenState,
  deleteModalOpenState,
} from '@recoil/ProfileStack/store';
import RNRestart from 'react-native-restart';

export default function Output() {
  const navigation = useNavigation();
  const setLogoutShow = useSetRecoilState(logoutModalOpenState);
  const setDeleteShow = useSetRecoilState(deleteModalOpenState);

  // 로그인했는지 안했는지 확인하는 리코일
  const setIsLogin = useSetRecoilState(IsLogin);
  const setIsInstructor = useSetRecoilState(IsInstructor);

  const onExecuteLogout = async () => {
    setLogoutShow(state => !state);
    try {
      await AsyncStorage.removeItem('atk');

      setIsInstructor(false);
      setIsLogin(false);

      RNRestart.Restart();
    } catch (err) {
      console.log(err);
    }
    console.log('logout');
  };

  const onExecuteDelete = () => {
    navigation.navigate('DeleteAccount');
    setDeleteShow(false);
  };

  return (
    <View style={styles.container}>
      <ShowOutputModal
        title="로그아웃"
        desc="로그아웃 하시겠습니까?"
        onExecute={onExecuteLogout}
      />
      <ShowOutputModal
        title="회원탈퇴"
        desc="회원탈퇴 하시겠습니까?"
        onExecute={onExecuteDelete}
      />
    </View>
  );
}
