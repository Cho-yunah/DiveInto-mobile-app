import React from 'react';
import { View, Image } from 'react-native';
import { useRecoilValue } from 'recoil';

import { mainHeaderStyles as styles } from './styles';
import { ProfileImageProps } from './types';
import { ProfileImageURIState } from '@/src/recoil/ProfileStack';

export default function ProfileImg() {
  const imageURI = useRecoilValue(ProfileImageURIState);

  return (
    <View>
      {imageURI && (
        <Image
          source={{
            uri: imageURI,
          }}
          style={styles.profileImage}
        />
      )}
    </View>
  );
}
