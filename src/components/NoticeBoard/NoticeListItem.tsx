import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { NoticeListItemProps } from './types';

export default function NoticeListItems({ title, date }: NoticeListItemProps) {
  const navigation = useNavigation();

  const moveDetailTerms = () => {
    // navigation.navigate('DetailTerms');
    console.log('Click moveDetailTerms function');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={moveDetailTerms}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </TouchableOpacity>
    </View>
  );
}
