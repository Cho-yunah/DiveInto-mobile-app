import React from 'react';
import { View, Image, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

import { mainHeaderStyles as styles } from './styles';
import { ProfileImageURIState } from '@recoil/ProfileStack/store';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { basicThumnailUrl } from '@/src/config/basicThumnailUrl';

export default function ProfileImg() {
  const imageURI = useRecoilValue(ProfileImageURIState);
  const basicURI = basicThumnailUrl;

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
