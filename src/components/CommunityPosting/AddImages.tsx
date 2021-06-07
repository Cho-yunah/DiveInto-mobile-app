import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-animatable'
import {styles} from './styles'

export default function AddImages () {
  return (
    <View style = {styles.inputContainer}>
      <View style= {styles.addImageBox} >
        <Image style={styles.CommunityImage} source={{}}></Image>
        <Text style= {styles.text}> 사진을 업로드해주세요(최대 3장)</Text>
      </View>
    </View>
  )
}