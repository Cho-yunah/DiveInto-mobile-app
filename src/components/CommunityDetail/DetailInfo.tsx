import instance from '@/src/lib/api/axios'
import { atkState, DetailInfoType } from '@/src/recoil/CommunityStack'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native'
import { useRecoilValue } from 'recoil'
import {DetailInfoStyle as styles} from './styles'

export default function DetailInfo({id, title, dateOfRegistration}: 
  DetailInfoType) {
  const navigation = useNavigation()
  const token = useRecoilValue(atkState)
  console.log('detail',token)

  const config = {
    headers: {
      Authorization: token,
      // 'Content-Type': 'application/json'
    }
  }

  const requestDelete = async() => {
    console.log('delete!')
    console.log(id)
    try {
      const response = await instance.delete(`community/post/${id}`, config )
      // console.log(response)
    } catch(e) {
      console.log(e)
    }
  }
    
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
          <EditBtn style={styles.modify} navigation={navigation} id={id} />
          <DeleteBtn style={styles.delete} requestDelete={requestDelete}/>
       </View>
    </View>
  )
}

const EditBtn=({navigation, id}: any) => {
  console.log(id)
  return (
    <TouchableOpacity  onPress={()=> navigation.navigate('CommunityPosting', {id})} >
      <Text >수정</Text>
    </TouchableOpacity>
  )
}
const DeleteBtn= ({requestDelete}:any) => {
  return (
    <TouchableOpacity onPress={requestDelete}>
      <Text >삭제</Text>
    </TouchableOpacity>
  )
}