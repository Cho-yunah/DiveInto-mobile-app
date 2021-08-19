import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { mainHeaderStyles as styles, lecturerHeaderStyles } from './styles';
import { HeaderContainerProps } from './types';
import ProfileImg from './ProfileImg';
import UploadImgBtn from './UploadImgBtn';
import instance from '@/src/lib/api/axios';
import { atkState, ProfileImageURIState } from '@/src/recoil/ProfileStack';

export default function Header({
  currScreen,
  buttonText,
}: HeaderContainerProps) {
  const setImageURI = useSetRecoilState(ProfileImageURIState);
  const atk = useRecoilValue(atkState);

  useEffect(() => {
    const getProfileImg = async () => {
      try {
        const res = await instance.get('/profile-photo', {
          headers: {
            Authorization: atk,
          },
        });

        setImageURI(res.data.imageUrl);
      } catch (err) {
        console.log(err);
      }
    };

    if (atk) {
      getProfileImg();
    }
  }, [atk]);

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
