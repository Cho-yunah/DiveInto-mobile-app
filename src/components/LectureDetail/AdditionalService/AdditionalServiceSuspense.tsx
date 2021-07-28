import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { AdditionalServiceStyles as styles } from './styles';

const AdditionalServiceSuspense = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={windowWidth} height={30} />
      </SkeletonPlaceholder>
    </View>
  );
};

export default AdditionalServiceSuspense;
