import React from 'react';
import { View, Image } from 'react-native';

import { LectureImageStyle as styles } from './styles';
import { LectureImageProps } from '../types';

export default function LectureImage({ img }: LectureImageProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: img ? img : 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.imageStyle}
      />
    </View>
  );
}
