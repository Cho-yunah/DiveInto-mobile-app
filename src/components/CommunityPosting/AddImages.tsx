import React, { useState } from 'react'
import { Pressable, Text, View, Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles'
import {multiImageSelect} from '@lib/file/filePicker'

export default function AddImages () {
  const [imageUri, setImageUri]= useState<string[]>();
  
  const getImage = async () => {
    const result = await multiImageSelect()
    const resultArray=(result?.map(item => item.uri))
    setImageUri(resultArray)
    return resultArray
  }
  // console.log(imageUri)
    
  return (
    <View style = {styles.inputContainer}>
      <View style= {styles.addImageBox} >
        <Pressable 
          style={styles.imageUploadBtn}
          onPress={()=>getImage()}
          >
            {imageUri === undefined
              ? <FontAwesome name={'image'} size={16} color={'#fefefe'} /> 
              : imageUri.map((result) => {
                return (
                  <Image source={{uri: result}}
                  resizeMode='contain' />
                )
              })}
        </Pressable> 
        <Text style= {styles.text}> 사진을 업로드해주세요(최대 3장)</Text>
      </View>
    </View>
  )
}