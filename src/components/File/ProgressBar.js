import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const ProgressBar = ({
  progress,
  backgroundColor = '#fff',
  isCompleted = false,
}) => {
  const animation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: isCompleted ? 0 : 250,
      useNativeDriver: false,
      easing: Easing.quad,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  return (
    <View style={[styles.progressBar, { backgroundColor }]}>
      <Animated.View
        style={
          ([StyleSheet.absoluteFill],
          { backgroundColor: '#393854', width, borderRadius: 10 })
        }
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    height: 7,
    width: '100%',
  },
});
