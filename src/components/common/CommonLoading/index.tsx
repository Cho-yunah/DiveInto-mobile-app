import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export default function CommonLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#50CAD2" />
    </View>
  );
}
