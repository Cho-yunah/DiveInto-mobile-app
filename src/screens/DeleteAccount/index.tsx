import React, { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useRecoilValue } from 'recoil';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { getInstanceATK } from '@lib/api/axios';
import {
  DeleteInfo,
  DeleteReason,
  ConfirmPW,
  DeleteCompleteBtn,
} from '@components/DeleteAccount';
import { deletePasswordState } from '@recoil/ProfileStack/store';

export default function DeleteAccountScreen() {
  const navigation = useNavigation();
  const password = useRecoilValue(deletePasswordState);
  const [isLoading, setIsLoading] = useState(false);
  // 현재 계정 삭제 api에는 payload로 password만을 필요로 하지만 나중에 삭제 이유도 넣게 되면 필요한 상태들(기타 의견 및 dropdown select 의견)
  // const selectOption = useRecoilValue(deleteReasonState);
  // const etcOption = useRecoilValue(etcDeleteReasonState);

  const onDeleteUser = useCallback(() => {
    const requestDeleteAPi = async () => {
      const instanceAtk = await getInstanceATK();

      try {
        setIsLoading(true);
        // 시연할때 사용한 계획
        // await instanceAtk.delete('/account', {
        //   data: {
        //     password,
        //   },
        // });
        await AsyncStorage.removeItem('atk');
        console.log(password, '회원 삭제');
        navigation.navigate('login');
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };

    requestDeleteAPi();
  }, [password]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원탈퇴 전에 꼭 확인해주세요.</Text>
      <DeleteInfo />
      <DeleteReason />
      <ConfirmPW />
      <DeleteCompleteBtn onDeleteUser={onDeleteUser} />
    </View>
  );
}
