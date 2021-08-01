import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useSetRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import ShowOutputModal from './ShowOutputModal';
import {
  logoutModalOpenState,
  deleteModalOpenState,
} from '@/src/recoil/ProfileStack';

export default function Output() {
  const navigation = useNavigation();
  const setLogoutShow = useSetRecoilState(logoutModalOpenState);
  const setDeleteShow = useSetRecoilState(deleteModalOpenState);

  const onExecuteLogout = async () => {
    try {
      await AsyncStorage.removeItem('atk');
      setLogoutShow(false);
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
