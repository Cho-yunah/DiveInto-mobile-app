import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { mainHeaderStyles as styles, lecturerHeaderStyles } from './styles';
import { HeaderContainerProps } from './types';
import ProfileImg from './ProfileImg';
import UploadImgBtn from './UploadImgBtn';
import { ProfileImageURIState } from '@recoil/ProfileStack/store';
import { profileMainMultipleEval } from '@recoil/ProfileStack/dataFetch';

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
    <SafeAreaView
      style={[
        styles.rootContainer,
        currScreen === 'instructor' && lecturerHeaderStyles.rootContainer,
      ]}
    >
      <View
        style={[
          styles.headerContainer,
          currScreen === 'instructor' && lecturerHeaderStyles.headerContainer,
        ]}
      >
        <ProfileImg />
        <UploadImgBtn buttonText={buttonText} />
      </View>
    </SafeAreaView>
  );
}
