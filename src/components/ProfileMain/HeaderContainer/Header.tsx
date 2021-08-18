import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSetRecoilState } from 'recoil';

import { mainHeaderStyles as styles, lecturerHeaderStyles } from './styles';
import { HeaderContainerProps } from './types';
import ProfileImg from './ProfileImg';
import UploadImgBtn from './UploadImgBtn';
import { getInstanceATK } from '@/src/lib/api/axios';
import { ProfileImageURIState } from '@recoil/ProfileStack/store';

export default function Header({
  currScreen,
  buttonText,
}: HeaderContainerProps) {
  const setImageURI = useSetRecoilState(ProfileImageURIState);

  useEffect(() => {
    const getProfileImg = async () => {
      const instanceAtk = await getInstanceATK();

      try {
        const res = await instanceAtk.get('/profile-photo');

        setImageURI(res.data.imageUrl);
      } catch (err) {
        console.log(err);
      }
    };

    getProfileImg();
  }, []);

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
