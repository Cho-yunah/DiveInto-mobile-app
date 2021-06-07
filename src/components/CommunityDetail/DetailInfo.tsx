import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Image } from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditButton from './EditButton'

import {DetailInfoStyle as styles} from './styles'

export default function DetialInfo() {
  return (
    <View style={styles.writerInfoBox}>
       <Image style={styles.writerImage} source={{uri: '#'}}/>
       <View>
        <Text style={styles.nicknameStyle}>Nickname</Text>
        <Text style= {styles.dateStyle}>Posting Date</Text>
       </View>
       <View style= {styles.buttons}>
          <EditButton text={'수정'} style={styles.modify} onPress={''}/>
          <EditButton text={'삭제'} style={styles.delete} onPress={''}/>
       </View>
    </View>
  )
}