import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const UploadPics = () => {
  const [isListed, setIsListed] = useState<boolean>(true);

  return (
    <View style={styles.photoContainer}>
      <Pressable style={styles.photoUploadBtn}>
        <FontAwesome name={'photo'} size={16} color={'#fefefe'} />
      </Pressable>
      {isListed && (
        <Text style={styles.photoUploadText}>사진을 업로드 해주세요</Text>
      )}
      <Text style={styles.photoUploadLimit}>(최대 3장)</Text>
    </View>
  );
};

export default UploadPics;
