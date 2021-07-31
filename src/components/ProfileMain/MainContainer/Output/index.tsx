import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useSetRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import ShowOutputModal from './ShowOutputModal';
import { outputViewModalOpenState } from '@/src/recoil/ProfileStack';

export default function Output() {
  const navigation = useNavigation();
  const setShow = useSetRecoilState(outputViewModalOpenState);

  const onExecuteLogout = async () => {
    try {
      await AsyncStorage.removeItem('atk');
      setShow(false);
    } catch (err) {
      console.log(err);
    }
    console.log('logout');
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
        onExecute={onExecuteLogout}
      />
    </View>
  );
}
