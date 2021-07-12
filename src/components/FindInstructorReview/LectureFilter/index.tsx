import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import EachLectureFilter from './EachLectureFilter';

export default function LectureFilterContainer() {
  return (
    <View style={styles.container}>
      <EachLectureFilter text="최신순" active />
      <EachLectureFilter text="가나다순" />
    </View>
  );
}
