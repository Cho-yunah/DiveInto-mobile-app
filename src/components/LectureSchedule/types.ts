import { ReactChild, ReactChildren } from 'react';
import { Animated } from 'react-native';

export type CommonListProps = {
  imgComponent: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  contentsComponents?:
    | ReactChild
    | ReactChild[]
    | ReactChildren
    | ReactChildren[];
  // type: 'last' | 'next';
  reservationId: number;
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
  lectureType: 'last' | 'next';
};

export type RightSwipeProps = {
  progress: Animated.AnimatedInterpolation;
  dragX: Animated.AnimatedInterpolation;
  onPress: () => void;
};
