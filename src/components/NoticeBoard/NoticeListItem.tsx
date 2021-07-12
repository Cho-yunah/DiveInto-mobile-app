import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NoticeListItem as styles } from './styles';
import { NoticeListItemProps } from './types';

export default function NoticeListItems({
  title,
  date,
  id,
}: NoticeListItemProps) {
  const navigation = useNavigation();

  const moveDetailTerms = () => {
    navigation.navigate('DetailNotice', {
      noticeId: id,
      title,
      date,
    });
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
