import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { useRecoilCallback, useSetRecoilState } from 'recoil';

import { singleImageSelect } from '@/src/lib/file';
import { mainHeaderStyles as styles } from './styles';
import { getInstanceATK } from '@/src/lib/api/axios';
import { ProfileImageURIState } from '@recoil/ProfileStack/store';

export default function UploadImgBtn({ buttonText }: { buttonText: string }) {
  const setImageURI = useSetRecoilState(ProfileImageURIState);

  const onChangeImgBtn = useRecoilCallback(({ snapshot, set }) => async () => {
    const instanceAtk = await getInstanceATK();
    setImageURI(null);
    try {
      const imgInfo: DocumentPickerResponse | undefined =
        await singleImageSelect();

      if (imgInfo) {
        const body = new FormData();

        body.append('image', {
          name: imgInfo.name,
          type: imgInfo.type,
          uri: imgInfo.uri,
        });

        const { data } = await instanceAtk.post('/profile-photo', body);

        set(ProfileImageURIState, data.url);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <View>
      <TouchableOpacity onPress={onChangeImgBtn}>
        <Text style={styles.changeImageButton}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
