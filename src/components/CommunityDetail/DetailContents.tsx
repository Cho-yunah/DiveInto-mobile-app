import React from 'react'
import { View , Text} from 'react-native'
import { Image } from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler'
import {styles} from './styles'

export default function DetailContents() {

  return (
    <View style= {styles.contentsContainer}>
      <Text style={styles.textStyle}>
        안녕하세요 저는 스쿠버다이빙 초보이고, 이번에 처음 가입해서 다이빙을 시작하려고 합니다! 고수분들의 조언을 듣고싶습니다~~
      </Text>
        <ScrollView horizontal={true} style={styles.imageBox}>
          <Image style={styles.contentsImage} source={{uri: '#'}}/>
          <Image style={styles.contentsImage} source={{uri: '#'}}/>
        </ScrollView>
    </View>
  )
}