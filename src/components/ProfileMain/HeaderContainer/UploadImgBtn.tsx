import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { HeaderStyles as styles } from './styles';

export default function UploadImgBtn() {
  const onChangeImgBtn = (): void => {
    console.log('change Image');
  };

  return (
    <View>
      <TouchableOpacity onPress={onChangeImgBtn}>
        <Text style={styles.changeImageButton}>사진 수정</Text>
      </TouchableOpacity>
    </View>
  );
}
