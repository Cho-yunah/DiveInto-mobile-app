import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SuspenseLocationInfo = () => (
  <View
    style={{
      paddingHorizontal: 17,
      paddingVertical: 24,
      marginTop: 4,
    }}
  >
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width={'100%'} height={290} />
    </SkeletonPlaceholder>
  </View>
);

export default SuspenseLocationInfo;
