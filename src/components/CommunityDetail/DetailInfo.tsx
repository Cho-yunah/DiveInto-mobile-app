import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Image } from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {styles} from './styles'

export default function DetialInfo() {
  return (
    <View style={styles.writerInfoBox}>
       <Image style={styles.writerImage} source={{uri: '#'}}/>
       <View>
        <Text style={styles.nicknameStyle}>Nickname</Text>
        <Text style= {styles.dateStyle}>Posting Date</Text>
       </View>
       <View style= {styles.buttons}>
         <Pressable >
           <Text style={{color: '#A9BBC9'}}>수정</Text>
        </Pressable>
         <TouchableOpacity>
           <Text style={{color: '#E93A55'}}>삭제</Text>
        </TouchableOpacity>
         
       </View>
    </View>
  )
}