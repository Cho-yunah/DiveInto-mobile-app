import React from 'react';
import { TextInput } from 'react-native';

// root path
import styles from './styles';

function NicknameInput() {
  return <TextInput style={styles.commonText} placeholder="닉네임" />;
}

export default NicknameInput;