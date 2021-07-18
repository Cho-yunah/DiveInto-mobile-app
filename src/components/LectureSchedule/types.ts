import { ReactChild, ReactChildren } from 'react';
import { Animated } from 'react-native';

export type AuxProps = {
  imgComponent: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  contentsComponents?:
    | ReactChild
    | ReactChild[]
    | ReactChildren
    | ReactChildren[];
  type: 'last' | 'next';
};

export type SwipeAnimatedProps = {
  progress: Animated.AnimatedInterpolation;
  dragX: Animated.AnimatedInterpolation;
};

export type LectureContentsProps = {
  title: string;
  level: string;
  group: string;
  reservationDate: string;
  nickname: string;
};

export type RightSwipeProps = {
  progress: Animated.AnimatedInterpolation;
  dragX: Animated.AnimatedInterpolation;
  onPress: () => void;
};
