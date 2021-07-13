import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import { mainHeaderStyles as styles } from './styles';
import { ProfileImageProps } from './types';

export default function ProfileImg({ uri }: ProfileImageProps) {
  return (
    <View>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.profileImage}
      />
    </View>
  );
}
