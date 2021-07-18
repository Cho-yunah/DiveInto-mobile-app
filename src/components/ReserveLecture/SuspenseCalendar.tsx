import React from 'react';
import { useWindowDimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SuspenseCalendar = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width={windowWidth} height={290} />
    </SkeletonPlaceholder>
  );
};

export default SuspenseCalendar;
