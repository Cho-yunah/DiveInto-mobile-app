import React from 'react';
import { View, Image } from 'react-native';

import { LectureImageStyle as styles } from './styles';

export default function LectureImage() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.imageStyle}
      />
    </View>
  );
}
