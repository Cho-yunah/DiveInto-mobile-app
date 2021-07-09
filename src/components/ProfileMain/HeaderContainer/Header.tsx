import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { mainHeaderStyles as styles, lecturerHeaderStyles } from './styles';
import { HeaderContainerProps } from './types';
import ProfileImg from './ProfileImg';
import UploadImgBtn from './UploadImgBtn';
import instance from '@/src/lib/api/axios';
import { atkState } from '@/src/recoil/ProfileStack';

export default function Header({
  currScreen,
  buttonText,
}: HeaderContainerProps) {
  const [imageURI, setImageURI] = useState<string | null>(null);
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
        {imageURI && <ProfileImg uri={imageURI} />}
        <UploadImgBtn buttonText={buttonText} />
      </View>
    </View>
  );
}
