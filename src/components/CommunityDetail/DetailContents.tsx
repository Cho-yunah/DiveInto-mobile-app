import { communityItemSelector } from '@/src/recoil/CommunityStack'
import React from 'react'
import { View , Text, ScrollView, Image} from 'react-native'
import { useRecoilValue } from 'recoil'
import {ContentsStyle as styles} from './styles'

export default function DetailContents() {
  const {id,content }= useRecoilValue(communityItemSelector)

  return (
    <View style= {styles.contentsContainer}>
      <Text style={styles.textStyle}>
       {content}
      </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.imageBox}>
          <Image style={styles.contentsImage} source={{uri: '#'}}/>
          <Image style={styles.contentsImage} source={{uri: '#'}}/>
        </ScrollView>
    </View>
  )
}