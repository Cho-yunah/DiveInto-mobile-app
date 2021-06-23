import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { mainHeaderStyles as styles } from './styles';

export default function UploadImgBtn({ buttonText }: { buttonText: string }) {
  const onChangeImgBtn = (): void => {
    console.log('change Image');
  };

  return (
    <View>
      <TouchableOpacity onPress={onChangeImgBtn}>
        <Text style={styles.changeImageButton}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
