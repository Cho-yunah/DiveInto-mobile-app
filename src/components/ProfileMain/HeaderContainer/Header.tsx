import React from 'react';
import { View } from 'react-native';

import { HeaderStyles as styles } from './styles';
import ProfileImg from './ProfileImg';
import UploadImgBtn from './UploadImgBtn';

export default function Header() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <ProfileImg />
        <UploadImgBtn />
      </View>
    </View>
  );
}
