import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

import { ErrorMessage as styles } from './styles';
import { isCertificationError } from '@/src/recoil/LoginStack';

export default function ErrorMessage() {
  const isError = useRecoilValue(isCertificationError);

  console.log(isError);

  return (
    <View>
      {isError && <Text style={styles.errorText}>잘못된 인증번호입니다.</Text>}
    </View>
  );
}
