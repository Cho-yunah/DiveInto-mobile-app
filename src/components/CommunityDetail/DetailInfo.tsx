import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native'
import { useRecoilValue } from 'recoil'
import {DetailInfoStyle as styles} from './styles'
import { communityItemSelector, useRequestCommunityItem } from './useRequestCommunityItem'

export default function DetialInfo() {
  const {id,title,category,dateOfRegistration }= useRecoilValue(communityItemSelector)

  useRequestCommunityItem()
  
  return (
    <View >
      <View style={styles.writerInfoBox}>
      <Image style={styles.writerImage} source={{uri: '#'}}/>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style= {styles.dateStyle}>{dateOfRegistration}</Text>
       </View>
    </View>
       <View style= {styles.buttons}>
          <EditButton text={'수정'} style={styles.modify} onPress={''}/>
          <EditButton text={'삭제'} style={styles.delete} onPress={''}/>
       </View>
    </View>
  )
}

function EditButton({text, style, onPress}:any) {
  return (
    <TouchableOpacity>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  )
}