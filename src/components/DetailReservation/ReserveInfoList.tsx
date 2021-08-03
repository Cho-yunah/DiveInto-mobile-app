import React from 'react';
import { View, ScrollView } from 'react-native';

import { ReserveInfoStyles as styles } from './styles';
import ReserveInfoItem from './ReserveInfoItem';

const infoList = [
  { id: 1, title: '대여장비', iconName: 'tools' },
  { id: 2, title: '지도보기', iconName: 'map-marker-alt' },
  { id: 3, title: '강의 일정', iconName: 'calendar-alt' },
];

export default function ReserveInfo() {
  return (
    <View style={styles.container}>
      {infoList.map(info => (
        <ReserveInfoItem
          key={info.id}
          title={info.title}
          iconName={info.iconName}
        />
      ))}
    </View>
  );
}
