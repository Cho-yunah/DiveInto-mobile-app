import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const PwForgot = () => (
  <SafeAreaView>
    <Pressable>
      <Text style={styles.underlineText}>비밀번호를 잊으셨나요?</Text>
    </Pressable>
  </SafeAreaView>
);

export default PwForgot;
1;
