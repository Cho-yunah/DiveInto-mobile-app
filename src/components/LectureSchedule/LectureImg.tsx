import React from 'react';
import { View, Image } from 'react-native';

import { lectureImgStyle as styles } from './styles';

export default function LectureImg() {
  return (
    <View>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.imageElStyle}
      />
    </View>
  );
}
