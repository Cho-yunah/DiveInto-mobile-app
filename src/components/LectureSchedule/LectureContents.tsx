import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { lectureContentsStyle as styles } from './styles';

export default function LectureContents() {
  return (
    <View style={styles.container}>
      <View style={styles.commonLayout}>
        <FontAwesome name="map-marker" size={10} />
        <Text style={styles.smallTextStyle}>위치</Text>
      </View>
      <View style={styles.commonLayout}>
        <Text style={styles.largeTextStyle}>제목</Text>
      </View>
      <View style={styles.commonLayout}>
        <Text style={styles.mediumTextStyle}>단체</Text>
        <Text style={styles.mediumTextStyle}>레벨</Text>
      </View>
      <View style={styles.commonLayout}>
        <Text style={styles.mediumTextStyle}>운영 시간</Text>
        <Text style={styles.mediumTextStyle}>수강 시간</Text>
      </View>
    </View>
  );
}
