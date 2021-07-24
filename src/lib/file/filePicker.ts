import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

export async function singleFileSelect() {
  // Pick a single file
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(
      '선택된 파일 : ',
      res.uri,
      res.type, // mime type
      res.name,
      res.size,
    );
    return res;
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
      console.log('취소하였습니다.');
    } else {
      throw err;
    }
  }
}

export async function multiFileSelect() {
  // Pick multiple files
  try {
    const results = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.allFiles],
    });
    for (const res of results) {
      console.log(
        '선택된 파일 : ',
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    }
    return results;
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
      console.log('취소하였습니다.');
    } else {
      throw err;
    }
  }
}

export async function singleImageSelect() {
  const getImage = (): Promise<DocumentPickerResponse | undefined> =>
    new Promise((resolve, reject) => {
      launchImageLibrary(
        {
          mediaType: 'photo',
          selectionLimit: 1,
        },
        async response => {
          console.log('response : ', response);
          if (response.didCancel) resolve(undefined);
          else {
            const asset: Asset = response.assets[0];
            console.log('선택된 이미지 : ', asset);
            resolve({
              uri: asset.uri!,
              fileCopyUri: '',
              copyError: response.errorMessage,
              type: asset.type!,
              name: asset.fileName!,
              size: asset.fileSize!,
            });
          }
        },
      );
    });

  const result = await getImage();

  return result;
}

export async function multiImageSelect() {
  const getImage = (): Promise<DocumentPickerResponse[] | undefined> =>
    new Promise((resolve, reject) => {
      launchImageLibrary(
        {
          mediaType: 'photo',
          selectionLimit: 3,
        },
        async response => {
          if (response.didCancel) resolve(undefined);
          else {
            const assets = response.assets;
            const result = assets.map(asset => ({
              uri: asset.uri!,
              fileCopyUri: '',
              copyError: response.errorMessage,
              type: asset.type!,
              name: asset.fileName!,
              size: asset.fileSize!,
            }));
            resolve(result);
          }
        },
      );
    });

  const result = await getImage();

  return result;
}
