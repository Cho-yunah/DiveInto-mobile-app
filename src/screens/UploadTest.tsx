import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  Image,
  GestureResponderEvent,
} from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { singleFileSelect, singleFileUpload } from '@lib/file';
import { dropbox } from '@config/token';

import { ProgressComponent, Modal } from '@components/File';

export default function UploadTest() {
  const [image, setImage] = useState<DocumentPickerResponse | undefined>();
  const [uploadState, setUploadState] = useState({
    percent: 0,
    written: 0,
    total: 0,
  });
  const [isCompleted, setIsCompleted] = useState<null | boolean>(null);
  const [visible, setVisible] = useState(false);

  const onRequestClose = () => setVisible(false);
  const preventParentEvent = (e: GestureResponderEvent) => e.stopPropagation();

  const onSelect = async () => {
    const result = await singleFileSelect();
    setImage(result);
    console.log('result : ', result);
  };

  const onAlbum = () =>
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
      },
      async response => {
        if (response.didCancel) setImage(undefined);
        else
          setImage({
            uri: response.uri!,
            fileCopyUri: '',
            copyError: response.errorMessage,
            type: response.type!,
            name: response.fileName!,
            size: response.fileSize!,
          });
      },
    );

  const onUpload = async () => {
    // progressBar 관련 함수
    const onInit = () => setVisible(true);
    const onProgress = (written: number, total: number) =>
      setUploadState({
        percent: Math.round((written / total) * 100),
        written,
        total,
      });
    const onSuccess = () => setIsCompleted(true);
    const onError = () => setIsCompleted(false);

    if (image) {
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
        onInit,
        onProgress,
        onSuccess,
        onError,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="파일" onPress={onSelect} />
      <Button title="이미지" onPress={onAlbum} />
      <Button title="업로드" onPress={onUpload} />
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        preventParentEvent={preventParentEvent}
      >
        <ProgressComponent
          title="파일업로드"
          isCompleted={isCompleted}
          written={uploadState.written}
          total={uploadState.total}
          percent={uploadState.percent}
        />
      </Modal>
    </SafeAreaView>
  );
}
