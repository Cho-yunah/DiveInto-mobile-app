import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import LectureContents from './LectureContents';
import LectureImage from './LectureImage';

export default function CommonLecture() {
  return (
    <TouchableOpacity style={styles.container}>
      <LectureImage />
      <LectureContents />
    </TouchableOpacity>
  );
}
