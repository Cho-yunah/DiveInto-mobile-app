import React from 'react';
import { View, Image } from 'react-native';

import { mainHeaderStyles as styles } from './styles';

export default function ProfileImg() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://img.theqoo.net/img/YaTtL.png',
        }}
        style={styles.profileImage}
      />
    </View>
  );
}
