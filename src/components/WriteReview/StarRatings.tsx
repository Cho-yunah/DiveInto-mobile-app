import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import { useRecoilState } from 'recoil';
import styles from './styles';
import { StarProps, starRatingProps } from './types';
import { ratingStarState } from '@recoil/ReviewStack';

const Star = ({ num, setRate, color }: StarProps) => (
  <Pressable onPress={() => setRate(num)}>
    <Entype size={20} color={color} name={'star'} />
  </Pressable>
);

const StarRating = ({ ratingName }: starRatingProps) => {
  const [rate, setRate] = useRecoilState(ratingStarState(ratingName));
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        num={i}
        setRate={setRate}
        color={rate < i ? '#CCD7DF' : 'rgb(248,194,93)'}
      />,
    );
  }
  return (
    <View>
      <Text style={styles.starText}>{ratingName}</Text>
      <View style={styles.starComponentContainer}>{stars}</View>
    </View>
  );
};

const StarRatings = () => {
  return (
    <View style={styles.starComponentsContainer}>
      <StarRating ratingName="강사" />
      <StarRating ratingName="강의" />
      <StarRating ratingName="장소" />
    </View>
  );
};

export default StarRatings;
