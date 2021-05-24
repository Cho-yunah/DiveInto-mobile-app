import React from 'react';
import { TextInput } from 'react-native';

// root path
import styles from './styles';

function PhoneInput() {
  return <TextInput style={styles.commonText} placeholder="휴대폰 번호" />;
}

export default PhoneInput;
