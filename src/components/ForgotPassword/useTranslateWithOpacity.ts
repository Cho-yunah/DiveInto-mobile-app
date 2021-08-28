import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useTranslateWithOpacity = (initialPosition: number) => {
  const translateYValue = useRef(new Animated.Value(initialPosition)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateYValue, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return [opacityValue, translateYValue] as const;
};

export default useTranslateWithOpacity;
