import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { LectureContentsStyle as styles } from './styles';

export default function LectureContents() {
  return (
    <View style={styles.container}>
      <View style={[styles.topViewlayout, styles.commonLayout]}>
        <FontAwesome size={10} color={'#535557'} name={'map-marker'} />
        <Text style={styles.topContentsStyle}>위치</Text>
      </View>
      <View style={[styles.middleViewLayout, styles.commonLayout]}>
        <Text style={styles.titleStyle}>타이틀</Text>
        <Text style={styles.subTitleStyle}>소속단체</Text>
        <Text style={styles.subTitleStyle}>레벨</Text>
      </View>
      <View style={styles.bottomViewLayout}>
        <FontAwesome size={12} color={'#F8C25D'} name={'star'} />
        <Text style={styles.bottomTextStyle}>평점(리뷰 갯수)</Text>
      </View>
    </View>
  );
}
