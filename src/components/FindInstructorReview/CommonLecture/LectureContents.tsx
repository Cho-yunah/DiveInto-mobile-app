import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { LectureContentsStyle as styles } from './styles';
import { LectureContentsProps } from '../types';

export default function LectureContents({
  id,
  title,
  organization,
  level,
  region,
}: LectureContentsProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.topViewlayout, styles.commonLayout]}>
        <FontAwesome size={10} color={'#535557'} name={'map-marker'} />
        <Text style={styles.topContentsStyle}>{region}</Text>
      </View>
      <View style={styles.titleViewLayout}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={styles.middleViewLayout}>
        <Text style={styles.subTitleStyle}>{organization}</Text>
        <Text style={styles.subTitleStyle}>{level}</Text>
      </View>
      <View style={styles.bottomViewLayout}>
        <FontAwesome size={12} color={'#F8C25D'} name={'star'} />
        <Text style={styles.bottomTextStyle}>평점(리뷰 갯수)</Text>
      </View>
    </View>
  );
}
