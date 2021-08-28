import React, { useEffect, useState } from 'react'
import { Pressable, Text, View, Image, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles'
import {multiImageSelect} from '@lib/file/filePicker'
import { useRecoilState, useRecoilValue } from 'recoil';
import { ImageArrState, ImageState } from '@/src/recoil/CommunityStack';

export default function AddImages ({id}) {
  const [imageArr, setImageArr]= useRecoilState(ImageArrState);
  const [isLoading, setIsLoading] = useState(false)

  const beforeEditingImageArr = useRecoilValue(ImageState)
  // console.log(beforeEditingImageArr)
  
  // useEffect(()=> {
  //   beforeEditingImageArr && setImageArr(...beforeEditingImageArr)
  // }, [])
  
  const selectImages = async () => {
    try {
      setIsLoading(true);
      const images = (await multiImageSelect()) || [];
      setImageArr(
        images.map(img => ({
          size: img.size,
          uri: img.uri,
          type: img.type,
          name: img.name
        }))
      )
    } catch(e) {
      console.log(e)
    }
    setIsLoading(false)
  };
    
  return (
    <View style={styles.imageContainer}>
      {imageArr.length < 3 && (
        <Pressable style={styles.imageUploadBtn} onPress={selectImages}>
          <FontAwesome name={'photo'} size={16} color={'#fefefe'} />
        </Pressable>
      )}
      {!imageArr.length ? (
        <Text style={styles.imageUploadText}>
          {isLoading ? 'loading' : '사진을 업로드 해주세요'}
        </Text>
      ) : (
        <View style={styles.uploadedImagesContainer}>
          {imageArr.map((img, index) => (
            <TouchableOpacity
              style={styles.uploadedImgBtn}
              key={index}
              onPress={() => {
                setImageArr(
                  imageArr.filter(img => img.uri !== imageArr[index].uri),
                );
              }}
            >
              <Image source={{ uri: img.uri }} style={styles.uploadedImg} />
              <View style={styles.removeIconFilter}>
                <FontAwesome name="remove" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Text style={styles.imageUploadLimit}>(최대 3장)</Text>
    </View>
  )
}