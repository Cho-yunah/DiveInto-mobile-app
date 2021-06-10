import React, { useState } from 'react';
import { Button, SafeAreaView, Image } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { singleFileSelect, singleFileUpload } from '@lib/file';
import { dropbox } from '@config/token';

import { UploadProgress } from '@components/File';

export default function UploadTest() {
  const [image, setImage] = useState<DocumentPickerResponse | undefined>();
  const [percent, setPercent] = useState(0);

  const onSelect = async () => {
    const result = await singleFileSelect();
    setImage(result);
    console.log('result : ', result);
  };

  const onUpload = async () => {
    image &&
      singleFileUpload({
        fileInfo: image,
        uploadTo: 'https://content.dropboxapi.com/2/files/upload',
        headers: {
          Authorization: `Bearer ${dropbox}`,
          'Dropbox-API-Arg': JSON.stringify({
            path: `/${image.name}`,
            mode: 'add',
            autorename: true,
            mute: false,
          }),
          'Content-Type': 'application/octet-stream',
        },
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="파일" onPress={onSelect} />
      {/* <Button title="업로드" onPress={onUpload} /> */}
      {image && <UploadProgress title="test" file={image} index={0} />}
      {/* {image && <Image style={{ flex: 1 }} source={{ uri: image?.uri }} />} */}
    </SafeAreaView>
  );
}
