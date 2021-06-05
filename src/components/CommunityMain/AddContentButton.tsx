import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {styles} from './styles';

export default function AddContent({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.btnText}>글쓰기</Text>
    </TouchableOpacity>
  );
}
