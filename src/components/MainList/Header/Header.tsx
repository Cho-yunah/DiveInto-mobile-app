import React from 'react';
import { View, Text } from 'react-native';
import { HeaderStyles as styles } from './styles';
import SearchBox from './SearchBox';
import Alarm from './Alarm';
import Filter from './Filter';

export default function Header({ userName }: { userName: string }) {
  const hasAlarm = true;
  const onAlarmPress = () => {};
  const onFilterPress = () => {};

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {`안녕하세요, ${userName}님\n오늘 풍덩 어때요?`}
        </Text>
        <Alarm onPress={onAlarmPress} hasAlarm={hasAlarm} />
      </View>
      <View style={[styles.searchBarContainer]}>
        <SearchBox placeholder="원하는 강의를 찾아보세요." />
        <Filter onPress={onFilterPress} />
      </View>
    </View>
  );
}
