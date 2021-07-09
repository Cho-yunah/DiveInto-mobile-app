import React from 'react'
import { View , Text, ScrollView, Image} from 'react-native'
import { useRecoilValue } from 'recoil'
import {ContentsStyle as styles} from './styles'
import { communityItemSelector } from './useRequestCommunityItem'

export default function DetailContents() {
  const {id,content }= useRecoilValue(communityItemSelector)

  return (
    <View style= {styles.contentsContainer}>
      <Text style={styles.textStyle}>
       {content}
      </Text>
        <ScrollView horizontal={true} style={styles.imageBox}>
          <Image style={styles.contentsImage} source={{uri: '#'}}/>
          <Image style={styles.contentsImage} source={{uri: '#'}}/>
        </ScrollView>
    </View>
  )
}