import DocumentPicker from 'react-native-document-picker';

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
