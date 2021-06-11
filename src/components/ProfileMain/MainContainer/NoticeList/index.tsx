import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import CommonBtn from '../CommonBtn';

export default function NoticeList() {
  const navigation = useNavigation();

  const moveNoticeListScreen = () => {
    navigation.navigate('NoticeList');
  };

  const moveFAQScreen = () => {
    navigation.navigate('ProfileTab');
  };

  const movePolicyStackScreen = () => {
    navigation.navigate('Policy');
  };

  return (
    <View style={styles.container}>
      <CommonBtn title="공지사항" moveNavigation={moveNoticeListScreen} />
      <CommonBtn title="자주 묻는 질문" moveNavigation={moveFAQScreen} />
      <CommonBtn title="약관 및 정책" moveNavigation={movePolicyStackScreen} />
    </View>
  );
}
