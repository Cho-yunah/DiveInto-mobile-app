import { multiImageSelect } from '@/src/lib/file';
import { picsArrState } from '@/src/recoil/ReviewStack';
import React, { useState } from 'react';
import { Image, Pressable, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRecoilState } from 'recoil';
import styles from './styles';

const UploadPics = () => {
  const [picsArr, setPicsArr] = useRecoilState(picsArrState);
  const [isLoading, setIsLoading] = useState(false);

  const chooseUploadPics = async () => {
    try {
      setIsLoading(true);
      const pics = (await multiImageSelect()) || [];

      setPicsArr(
        pics.map(pic => ({
          size: pic.size,
          uri: pic.uri,
          type: pic.type,
          name: pic.name,
        })),
      );
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.photoContainer}>
      {picsArr.length < 3 && (
        <Pressable style={styles.photoUploadBtn} onPress={chooseUploadPics}>
          <FontAwesome name={'photo'} size={16} color={'#fefefe'} />
        </Pressable>
      )}
      {!picsArr.length ? (
        <Text style={styles.photoUploadText}>
          {isLoading ? 'loading' : '사진을 업로드 해주세요'}
        </Text>
      ) : (
        <View style={styles.uploadedPicsContainer}>
          {picsArr.map((pic, index) => (
            <TouchableOpacity
              style={styles.uploadedPicBtn}
              key={index}
              onPress={() => {
                setPicsArr(
                  picsArr.filter(pic => pic.uri !== picsArr[index].uri),
                );
              }}
            >
              <Image source={{ uri: pic.uri }} style={styles.uploadedPic} />
              <View style={styles.removeIconFilter}>
                <FontAwesome name="remove" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Text style={styles.photoUploadLimit}>(최대 3장)</Text>
    </View>
  );
};

export default UploadPics;
