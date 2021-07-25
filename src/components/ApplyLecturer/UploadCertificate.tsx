import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { UploadCertificate as styles } from './styles';

export default function UploadCertificate() {
  const onPress = () => console.log('사진 받아오기');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.uploadButton}>
        <Feather name="upload" size={25} style={styles.icon} />
        <Text style={styles.buttonText}>강사 자격증 이미지 첨부</Text>
      </TouchableOpacity>
    </View>
  );
}
