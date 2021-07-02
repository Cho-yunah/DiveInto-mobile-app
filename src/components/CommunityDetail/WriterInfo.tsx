import React from 'react'
import { Image, Text, View } from 'react-native'
import {DetailInfoStyle as styles} from './styles'

export default function WriterInfo () {
  return (
    <View style={styles.writerInfoBox}>
      <Image style={styles.writerImage} source={{uri: '#'}}/>
      <View>
        <Text style={styles.nicknameStyle}>Nickname</Text>
        <Text style= {styles.dateStyle}>Posting Date</Text>
       </View>
    </View>
  )
}