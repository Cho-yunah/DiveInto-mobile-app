import React from 'react';
import { useWindowDimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LecturePicsCarouselSuspense = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width={windowWidth} height={195} />
    </SkeletonPlaceholder>
  );
};

export default LecturePicsCarouselSuspense;
