import addCashComma from '@/src/lib/utils/addCashComma';
import { lectureInfoSelector } from '@/src/recoil/LectureStack';
import React from 'react';
import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { LectureInfoStyles as styles } from './styles';

const LectureInfo = () => {
  const {
    title,
    organization,
    level,
    description,
    price,
  }: {
    title: string;
    organization: string;
    level: string;
    description: string;
    price: number;
  } = useRecoilValue(lectureInfoSelector);

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.lectureTitle}>{title}</Text>
        <View style={styles.lectureTagContainer}>
          <View style={styles.lectureTagInnerContainer}>
            <Text style={styles.lectureTag}>#{organization}</Text>
            <Text style={styles.lectureTag}>#LV{level[5]}</Text>
          </View>
          <View style={styles.lecturePriceContainer}>
            <Text style={styles.lecturePrice}>{addCashComma(price)}</Text>
            <Text style={styles.lecturePriceUnit}>원</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomInfo}>
        <Text style={styles.bottomInfoText}>{description}</Text>
      </View>
    </View>
  );
};

export default LectureInfo;
