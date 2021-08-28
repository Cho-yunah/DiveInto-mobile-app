import React from 'react';
import { InstructorProfileStyles as styles } from './styles';

import { useWindowDimensions, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const InstructorProfileSuspense = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={40} height={20} />
      </SkeletonPlaceholder>
      <View style={styles.profileInfoContainer}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
        </SkeletonPlaceholder>
        <View
          style={[styles.instructorInfoContainer, { width: windowWidth - 85 }]}
        >
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item width={'100%'} height={40} />
          </SkeletonPlaceholder>
        </View>
      </View>
    </View>
  );
};

export default InstructorProfileSuspense;
