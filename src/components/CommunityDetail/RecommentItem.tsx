import { recommentItemType } from '@/src/recoil/CommunityStack'
import React from 'react'
import {View, Text, Image} from 'react-native'
import { TimeOfWriting } from '../CommunityMain/TimeOfWriting'
import {RecommentDetailStyles as styles} from './styles'

export const RecommentItem =({nickName, profileUrl, dateOfWriting, content, recommentId}: recommentItemType) => {
  return (
    <View style={styles.recommentBox}>
      <View style={styles.writerInfo}>
        <Image style={styles.profileImg} source={{uri:profileUrl}}/>
        <Text style={styles.nickname}> 
        {nickName} 
        </Text>
        <Text style= {styles.date}>
          <TimeOfWriting time={dateOfWriting}/>
        </Text>
      </View>
      <Text style={styles.recomment} >{content}</Text>
    </View>
  )
}