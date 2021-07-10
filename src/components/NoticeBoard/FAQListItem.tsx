import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FAQListItem as styles } from './styles';

export default function FAQListItem({ desc }: any) {
  const moveDetailScreen = () => {
    console.log('move');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={moveDetailScreen}>
        <Text style={styles.text}>{desc}</Text>
      </TouchableOpacity>
    </View>
  );
}
