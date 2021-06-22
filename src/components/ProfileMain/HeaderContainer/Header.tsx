import React from 'react';
import { View } from 'react-native';

import { mainHeaderStyles as styles, lecturerHeaderStyles } from './styles';
import { HeaderContainerProps } from './types';
import ProfileImg from './ProfileImg';
import UploadImgBtn from './UploadImgBtn';

export default function Header({
  currScreen,
  buttonText,
}: HeaderContainerProps) {
  return (
    <View
      style={[
        styles.rootContainer,
        currScreen === 'lecturer' && lecturerHeaderStyles.rootContainer,
      ]}
    >
      <View
        style={[
          styles.headerContainer,
          currScreen === 'lecturer' && lecturerHeaderStyles.headerContainer,
        ]}
      >
        <ProfileImg />
        <UploadImgBtn buttonText={buttonText} />
      </View>
    </View>
  );
}
