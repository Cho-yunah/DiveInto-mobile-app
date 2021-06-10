import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { UploadProgress as styles } from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProgressBar from './ProgressBar';

import { singleFileUpload } from '@lib/file';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Progress, UploadedBucket } from '@recoil/FileFetch';
import { dropbox } from '@config/token';

export default function UploadProgress({
  title,
  file,
  index,
}: {
  title: string;
  file: DocumentPickerResponse;
  index: number;
}) {
  const [uploadState, setUploadState] = useRecoilState(Progress(index));
  const [isCompleted, setIsCompleted] = useState<null | boolean>(null);
  // const setUploadedBucket = useSetRecoilState(UploadedBucket(index));
  useEffect(() => {
    // progressBar 관련 함수
    const onInit = () => {};
    const onProgress = (written: number, total: number) =>
      setUploadState({
        percent: Math.round((written / total) * 100),
        written,
        total,
      });
    const onSuccess = () => setIsCompleted(true);
    const onError = () => setIsCompleted(false);

    console.log('선택된 파일 : ', file);
    singleFileUpload({
      fileInfo: file,
      uploadTo: 'https://content.dropboxapi.com/2/files/upload',
      headers: {
        Authorization: `Bearer ${dropbox}`,
        'Dropbox-API-Arg': JSON.stringify({
          path: `/${file.name}`,
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
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {/* 제목,용량 */}
        <View style={{ flex: 1 }}>
          <Text style={styles.fileName}>{title}</Text>
          <Text style={styles.uploadSize}>
            {isCompleted === null
              ? `${uploadState.written}bytes / ${uploadState.total}bytes`
              : isCompleted
              ? '업로드 완료'
              : '업로드 실패'}
          </Text>
        </View>
        {/* 버튼 */}
        <Button
          isCompleted={isCompleted}
          onClosePress={() => {}}
          onRemovePress={() => {}}
        />
      </View>
      {/* 프로그레스바 */}
      <ProgressBar progress={uploadState.percent} backgroundColor="#FEFEFE" />
    </View>
  );
}

const Button = ({
  isCompleted,
  onClosePress,
  onRemovePress,
}: {
  isCompleted: null | boolean;
  onClosePress: () => void;
  onRemovePress: () => void;
}) => (
  <TouchableOpacity
    activeOpacity={0.3}
    style={isCompleted && styles.iconButton}
    onPress={isCompleted ? onRemovePress : onClosePress}
  >
    {isCompleted ? (
      <FontAwesome5 name="trash" size={20} color="#7976DA" />
    ) : (
      <Ionicons name="close" size={30} color="#929292" />
    )}
  </TouchableOpacity>
);
