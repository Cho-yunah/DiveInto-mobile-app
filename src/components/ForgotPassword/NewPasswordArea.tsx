import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { NewPasswordAreaStyle as styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { newPasswordState, reNewPasswordState } from '@/src/recoil/LoginStack';

const NewPasswordArea = () => {
  const [isPWVisible, setIsPWVisible] = useState(false);
  const [pw, setPw] = useRecoilState(newPasswordState);
  const [rePw, setRePw] = useRecoilState(reNewPasswordState);

  useEffect(() => {
    return () => {
      setPw('');
      setRePw('');
    };
  }, []);

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text>새 비밀번호를 입력해주세요. (4글자 이상)</Text>
      <View style={styles.PWInputContainer}>
        <TextInput
          placeholder="새 비밀번호를 입력해주세요."
          style={styles.codeInput}
          placeholderTextColor="#6A6D70"
          maxLength={22}
          secureTextEntry={isPWVisible ? false : true}
          value={pw}
          onChangeText={text => {
            setPw(text);
          }}
        />
        <Ionicons
          name="eye"
          size={20}
          onPress={() => setIsPWVisible(s => !s)}
          style={[
            styles.eyeIcon,
            { color: isPWVisible ? '#343434' : '#E0E0E1' },
          ]}
        />
      </View>
      <View style={styles.PWInputContainer}>
        <TextInput
          placeholder="새 비밀번호를 한번 더 입력해주세요."
          style={styles.codeInput}
          maxLength={22}
          placeholderTextColor="#6A6D70"
          secureTextEntry={isPWVisible ? false : true}
          value={rePw}
          onChangeText={text => setRePw(text)}
        />
        <Ionicons
          name="eye"
          size={20}
          onPress={() => setIsPWVisible(s => !s)}
          style={[
            styles.eyeIcon,
            { color: isPWVisible ? '#343434' : '#E0E0E1' },
          ]}
        />
      </View>
    </View>
  );
};

export default NewPasswordArea;
