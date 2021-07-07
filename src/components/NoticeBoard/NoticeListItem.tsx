import React from 'react';
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

  // 현재 12개의 정적 데이터가 있는데 왜 10개 데이터를 받고 다시 처음부터 받아서 필요없는 랜더링을 하는거지 ??
  console.log({ title, date, id });

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
