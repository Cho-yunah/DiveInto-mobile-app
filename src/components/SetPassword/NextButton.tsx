import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function SetPassword({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.btnText}>다음</Text>
    </TouchableOpacity>
  );
}
