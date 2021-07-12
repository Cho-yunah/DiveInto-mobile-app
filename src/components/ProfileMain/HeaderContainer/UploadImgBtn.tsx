import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { useRecoilValue } from 'recoil';

import { singleFileUpload, singleImageSelect } from '@/src/lib/file';
import { mainHeaderStyles as styles } from './styles';
import { baseURL } from '@/src/lib/api/axios';
import { atkState } from '@/src/recoil/ProfileStack';

export default function UploadImgBtn({
  buttonText,
  token,
}: {
  buttonText: string;
  token?: string;
}) {
  const atk = useRecoilValue(atkState);

  console.log(atk);

  const [isCompleted, setIsCompleted] = useState<null | boolean>(null);

  const onChangeImgBtn = async () => {
    try {
      const imgInfo: DocumentPickerResponse | undefined =
        await singleImageSelect();
      const onSuccess = () => setIsCompleted(true);
      const onError = () => setIsCompleted(false);

      if (imgInfo && atk) {
        await singleFileUpload({
          fileInfo: imgInfo,
          uploadTo: `${baseURL}/profile-photo`,
          headers: {
            Authorization: atk,
            // 'Dropbox-API-Arg': JSON.stringify({
            //   path: `/${imgInfo.name}`,
            //   mode: 'add',
            //   autorename: true,
            //   mute: false,
            // }),
            'Content-Type': 'multipart/form-data',
          },
          onSuccess,
          onError,
        });
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
