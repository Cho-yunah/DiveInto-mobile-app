import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FAQListItem as styles } from './styles';

export default function FAQListItem() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>강의 신청은 어디서 하면 되나요?</Text>
      </TouchableOpacity>
    </View>
  );
}
