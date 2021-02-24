import React from 'react';
import { Button, SafeAreaView } from 'react-native';

import { Logout, RefreshToken } from '../lib/api/TokenActivity';

export default function Main({ navigation }) {
  const btnLogout = () => {
    Logout({ navigation });
  };

  const btnInsRegister = () => {
    navigation.navigate('InsRegister');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFF' }}
    >
      <Button title="로그아웃" onPress={btnLogout} />
      <Button title="토큰 재발급" onPress={RefreshToken} />

      <Button title="강사 등록" onPress={btnInsRegister} />
    </SafeAreaView>
  );
}
