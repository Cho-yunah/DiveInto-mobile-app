import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import { atom } from 'recoil';
import styles from './styles';
import { StarProps } from './types';

const instructorRate = atom<number>({
  key: 'instructorRate',
  default: 0,
});

const lectureRate = atom<number>({
  key: 'lectureRate',
  default: 0,
});

const placeRate = atom<number>({
  key: 'placeRate',
  default: 0,
});

const Star = ({ num, setRate, color }: StarProps) => (
  <Pressable onPress={() => setRate(num)}>
    <Entype size={20} color={color} name={'star'} />
  </Pressable>
);

const StarRatings = () => {
  const [rate, setRate] = useState<number>(0);
  let stars = [];

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
    <View style={styles.starComponentsContainer}>
      <View>
        <Text style={styles.starText}>강사</Text>
        <View style={styles.starComponentContainer}>{stars}</View>
      </View>
      <View>
        <Text style={styles.starText}>강의</Text>
        <View style={styles.starComponentContainer}>{stars}</View>
      </View>
      <View>
        <Text style={styles.starText}>장소</Text>
        <View style={styles.starComponentContainer}>{stars}</View>
      </View>
    </View>
  );
};

export default StarRatings;
