import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useRecoilState } from 'recoil';

import { UploadCertificate as styles, containerShadowBox } from './styles';
import { multiImageSelect } from '@lib/file';
import { instructorImageCollectionState } from '@recoil/ProfileStack/store';
import { Image } from 'react-native-animatable';

export default function UploadCertificate() {
  const [picsArr, setPicsArr] = useRecoilState(instructorImageCollectionState);
  const [isLoading, setIsLoading] = useState(false);

  const onPress = async () => {
    try {
      setIsLoading(true);
      const imgInfo = (await multiImageSelect()) || [];

      setPicsArr(
        imgInfo.map(pic => ({
          size: pic.size,
          uri: pic.uri,
          type: pic.type,
          name: pic.name,
        })),
      );
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  if (isLoading) {
    // 파일 업로드 하는 동안 보여주는 로딩
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="small"
          color="#50CAD2"
          style={{ marginRight: 10 }}
        />
      </View>
    );
  } else {
    return (
      <View style={[styles.container, containerShadowBox.container]}>
        {picsArr.length !== 0 ? (
          // 사진 업로드 후 사진 보여주는 View
          picsArr.map((pic, index) => (
            <TouchableOpacity
              key={index}
              style={styles.picsArrButton}
              onPress={() =>
                setPicsArr(
                  picsArr.filter(pic => pic.uri !== picsArr[index].uri),
                )
              }
            >
              <Image source={{ uri: pic.uri }} style={styles.picsArrImage} />
            </TouchableOpacity>
          ))
        ) : (
          // 사진 업로드 전 View
          <TouchableOpacity onPress={onPress} style={styles.uploadButton}>
            <Feather name="upload" size={25} style={styles.icon} />
            <Text style={styles.buttonText}>강사 자격증 이미지 첨부</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
