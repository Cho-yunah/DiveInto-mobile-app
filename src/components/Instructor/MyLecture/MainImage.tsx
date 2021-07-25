import React from 'react';
import { View, Image } from 'react-native';
import { MainImageStyle as styles } from './styles';

const lectureExm = require('@assets/LectureExm.png');

export default function MainImage({ image }: { image: string }) {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={image ? { uri: image } : lectureExm}
        style={styles.image}
      />
    </View>
  );
}
