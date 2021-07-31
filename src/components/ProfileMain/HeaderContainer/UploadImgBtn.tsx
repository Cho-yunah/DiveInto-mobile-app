import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { singleFileUpload, singleImageSelect } from '@/src/lib/file';
import { mainHeaderStyles as styles } from './styles';
import instance from '@/src/lib/api/axios';
import { atkState, ProfileImageURIState } from '@/src/recoil/ProfileStack';

export default function UploadImgBtn({ buttonText }: { buttonText: string }) {
  const atk = useRecoilValue(atkState);
  const setImageURI = useSetRecoilState(ProfileImageURIState);

  const onChangeImgBtn = async () => {
    try {
      const imgInfo: DocumentPickerResponse | undefined =
        await singleImageSelect();

      if (imgInfo && atk) {
        const body = new FormData();
        body.append('image', {
          name: imgInfo.name,
          type: imgInfo.type,
          uri: imgInfo.uri,
        });

        const { data } = await instance.post('/profile-photo', body, {
          headers: {
            Authorization: atk,
          },
        });
        setImageURI(data.url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={onChangeImgBtn}>
        <Text style={styles.changeImageButton}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
