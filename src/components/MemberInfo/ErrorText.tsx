import React from 'react';
import { View, Text } from 'react-native';

import { inputStyles as styles } from './styles';
import { ErrorTextProps } from './types';

export default function ErrorText({ isError }: ErrorTextProps) {
  return (
    <View>
      <Text style={[styles.notErrorText, isError && styles.errorText]}>
        중복닉네임은 사용 불가합니다
      </Text>
    </View>
  );
}

// return (
//   <View>
//     {isError && (
//       <Text style={[styles.notErrorText, isError && styles.errorText]}>
//         중복닉네임은 사용 불가합니다
//       </Text>
//     )}

//     {!valid && (
//       <Text style={[styles.notErrorText, !valid && styles.errorText]}>
//         2~6자를 작성해주세요.
//       </Text>
//     )}
//   </View>
// );
