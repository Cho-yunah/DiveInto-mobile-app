import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import ReviewFilter from './ReviewFilter';

export default function ReviewFilterContainer() {
  return (
    <View style={styles.container}>
      <ReviewFilter text="최신순" active />
      <ReviewFilter text="낮은평순" />
      <ReviewFilter text="높은평순" />
    </View>
  );
}
