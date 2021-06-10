import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { OnInit, OnProgress, OnSuccess, OnError } from './types';

export async function singleFileUpload({
  fileInfo,
  uploadTo,
  onInit,
  onProgress,
  onSuccess,
  onError,
  headers,
}: {
  fileInfo: DocumentPickerResponse;
  uploadTo: string;
  onInit?: OnInit;
  onProgress?: OnProgress;
  onSuccess?: OnSuccess;
  onError?: OnError;
  headers?: { [key: string]: string };
}): Promise<void> {
  onInit && onInit();

  RNFetchBlob.fetch(
    'POST',
    uploadTo,
    headers,
    RNFetchBlob.wrap(
      Platform.OS === 'ios'
        ? `${fileInfo.uri.replace('file:', '')}`
        : fileInfo.uri,
    ),
  )
    .uploadProgress({ interval: 250 }, (written, total) => {
      const percent = Math.round((written / total) * 100);
      console.log('업로드 퍼센트 : ', percent);
      onProgress && onProgress(written, total);
    })
    .then(res => {
      console.log('업로드 성공 : ', res.text());
      onSuccess && onSuccess();
    })
    .catch(err => {
      // error handling ..
      console.log('파일 업로드 에러 : ', err);
      onError && onError(err);
    });
}

export const multiFileUpload = async (
  selectedFiles: DocumentPickerResponse[],
  uploadTo: string,
  onInit?: OnInit,
  onProgress?: OnProgress,
  onSuccess?: OnSuccess,
  OnError?: OnError,
  headers?: { [key: string]: string },
): Promise<void> => {
  console.log('multiFormUpload :', selectedFiles);

  onInit && onInit();
  RNFetchBlob.fetch(
    'POST',
    uploadTo,
    headers,
    selectedFiles.map(e => ({
      name: 'file',
      filename: e.name,
      type: e.type,
      data: RNFetchBlob.wrap(
        decodeURIComponent(
          Platform.OS === 'ios' ? `${e.uri.replace('file:', '')}` : e.uri,
        ),
      ),
    })),
  )
    // listen to upload progress event
    .uploadProgress((written, total) => {
      const percent = Math.round((written / total) * 100);
      console.log('업로드 퍼센트 : ', percent);
      onProgress && onProgress(written, total);
    })
    .then(res => {
      if (res.respInfo.status !== 200) {
        throw new Error('파일 업로드 에러');
      }
      console.log('멀티폼 데이터 업로드 완료 : ', res);
      onSuccess && onSuccess();
    })
    .catch(err => {
      console.log('멀티폼 데이터 업로드 에러 : ', err);
      OnError && OnError(err);
    });
};
