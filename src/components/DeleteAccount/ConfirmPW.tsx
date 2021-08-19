import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { confirmPWStyle as styles } from './styles';
import { deletePasswordState } from '@recoil/ProfileStack';

export default function ConfirmPW() {
  const [password, setPassword] = useRecoilState(deletePasswordState);
  const resetPW = useResetRecoilState(deletePasswordState);
  const [isPWVisible, setIsPWVisible] = useState(false);

  const onChangePW = (text: string) => {
    setPassword(text);
  };

  const onToggleVisible = () => setIsPWVisible(!isPWVisible);

  useEffect(() => {
    resetPW();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        textContentType={'newPassword'}
        secureTextEntry={isPWVisible ? false : true}
        placeholder="비밀번호를 입력하세요."
        placeholderTextColor={'#929292'}
        style={styles.passwordText}
        onChangeText={onChangePW}
        value={password}
        spellCheck={false}
      />
      <TouchableOpacity onPress={onToggleVisible} activeOpacity={1}>
        <Ionicons
          name="eye"
          size={20}
          style={{ color: isPWVisible ? '#343434' : '#E0E0E1' }}
        />
      </TouchableOpacity>
    </View>
  );
}
