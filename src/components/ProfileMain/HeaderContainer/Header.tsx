import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { mainHeaderStyles as styles, lecturerHeaderStyles } from './styles';
import { HeaderContainerProps } from './types';
import ProfileImg from './ProfileImg';
import UploadImgBtn from './UploadImgBtn';

import { ProfileImageURIState } from '@recoil/ProfileStack/store';
import { profileMainMultipleEval } from '@/src/recoil/ProfileStack/dataFetch';

export default function Header({
  currScreen,
  buttonText,
}: HeaderContainerProps) {
  const setImageURI = useSetRecoilState(ProfileImageURIState);
  const {
    imgURI: { imageUrl },
  } = useRecoilValue(profileMainMultipleEval);

  useEffect(() => {
    console.log(imageUrl);

    setImageURI(imageUrl);
  }, [imageUrl]);

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
