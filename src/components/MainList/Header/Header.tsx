import React from 'react';
import { View, Text } from 'react-native';
import { HeaderStyles as styles } from './styles';
import { StaticSearchBox } from './SearchBox';
import Alarm from './Alarm';
import Filter from './Filter';

export default function Header({
  userName,
  onKeywordSearchPress,
  onFilterSearchPress,
}: {
  userName: string;
  onKeywordSearchPress: () => void;
  onFilterSearchPress: () => void;
}) {
  const hasAlarm = true;
  const onAlarmPress = () => {};
  // const onFilterPress = () => {};

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {`안녕하세요, ${userName}님\n오늘 풍덩 어때요?`}
        </Text>
        <Alarm onPress={onAlarmPress} hasAlarm={hasAlarm} />
      </View>
      <View style={[styles.searchBarContainer]}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <StaticSearchBox
            placeholder="원하는 강의를 찾아보세요."
            onPress={onKeywordSearchPress}
          />
        </View>
        <Filter onPress={onFilterSearchPress} />
      </View>
    </View>
  );
}
