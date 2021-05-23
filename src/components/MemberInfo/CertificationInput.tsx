import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

function CertificationInput() {
  return <TextInput style={styles.commonText} placeholder="인증번호" />;
}

export default CertificationInput;
