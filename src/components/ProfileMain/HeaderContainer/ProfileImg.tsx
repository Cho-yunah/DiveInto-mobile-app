import React from 'react';
import { View, Image, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

import { mainHeaderStyles as styles } from './styles';
import { ProfileImageProps } from './types';
import { ProfileImageURIState } from '@/src/recoil/ProfileStack';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function ProfileImg() {
  const imageURI = useRecoilValue(ProfileImageURIState);

  return (
    <View>
      {imageURI ? (
        <Image
          source={{
            uri: imageURI,
          }}
          style={styles.profileImage}
        />
      ) : (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            width={100}
            height={100}
            borderRadius={50}
          />
        </SkeletonPlaceholder>
      )}
    </View>
  );
}
