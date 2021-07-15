import React from 'react';
import { View, Image } from 'react-native';

import { lectureImgStyle as styles } from './styles';

export default function LectureImg({ img }: { img: string }) {
  return (
    <View>
      <Image source={{ uri: img }} style={styles.imageElStyle} />
    </View>
  );
}
