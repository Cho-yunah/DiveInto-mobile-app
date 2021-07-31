import React from 'react';
import { Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { LectureInfoStyles as styles } from './styles';

const LectureInfoSuspense = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.lectureTitle}>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item width={360} height={20} />
          </SkeletonPlaceholder>
        </Text>
        <View style={styles.lectureTagContainer}>
          <View style={styles.lectureTagInnerContainer}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item width={100} height={20} />
            </SkeletonPlaceholder>
          </View>
          <View style={styles.lecturePriceContainer}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item width={100} height={20} />
            </SkeletonPlaceholder>
          </View>
        </View>
      </View>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={360} height={20} marginTop={12} />
      </SkeletonPlaceholder>
    </View>
  );
};

export default LectureInfoSuspense;
