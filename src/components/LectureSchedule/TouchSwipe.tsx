import React from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { TouchSwipeStyle as styles } from './styles';
import { AuxProps } from './types';

export default function TouchSwipe({
  imgComponent,
  contentsComponents,
}: AuxProps) {
  const RightSwipe = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-50, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity style={styles.deleteBottonContainer}>
        <Animated.View style={[styles.deleteBox, { transform: [{ scale }] }]}>
          <FontAwesome name="trash" color="#FEFEFE" size={25} />
          <Text style={styles.textStyle}>취소</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={RightSwipe}>
      <View style={styles.container}>
        {imgComponent}
        {contentsComponents}
      </View>
    </Swipeable>
  );
}
