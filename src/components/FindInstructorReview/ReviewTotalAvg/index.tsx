import React from 'react';
import { Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import useRequestTotalAvg from './useRequestTotalAvg';
import { ReivewTotalAvgProps } from '../types';

export default function ReivewTotalAvg({ id }: ReivewTotalAvgProps) {
  const reviewTotalAvg = useRequestTotalAvg(id);

  return (
    <View style={styles.topContainer}>
      {reviewTotalAvg ? (
        <>
          <Text style={styles.title}>후기</Text>
          <View style={styles.totalAvgRateContainer}>
            <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />

            <Text style={styles.totalAvgRateText}>{reviewTotalAvg} / 5점</Text>
          </View>
        </>
      ) : (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={360} height={35} />
        </SkeletonPlaceholder>
      )}
    </View>
  );
}
