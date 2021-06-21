import React from 'react'
import { View, TextInput } from 'react-native'

import {styles} from './styles'

export default function TitleAndContents() {
  return (
    <>
    <View style={styles.inputContainer}>
      <TextInput placeholder={'제목을 입력해주세요'} placeholderTextColor='#D8D8D8' style={{fontSize: 15}}/>
    </View>
    <View style={styles.inputContainer}>
      <TextInput placeholder={'내용을 작성해주세요'} placeholderTextColor='#D8D8D8' style={{fontSize: 15, minHeight: 150}} />
    </View>
    </>
  )
}