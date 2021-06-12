import React from 'react'
import { View, TextInput } from 'react-native'

import {styles} from './styles'

export default function TitleAndContents({item}) {
  return (
    <>
      <Title/>
      <Contents />
    </>
  )
}

const Title = () => {
  return (
    <View style={styles.inputContainer} >
      <TextInput 
        placeholder={'제목을 입력해주세요'} placeholderTextColor='#D8D8D8' 
        style={{fontSize: 15}}
        maxLength={60}
        multiline={true}
        numberOfLines={2}
        />
    </View>
  )
}

const Contents = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder={'내용을 작성해주세요'} placeholderTextColor='#D8D8D8' 
        style={{fontSize: 15, minHeight: 150}} 
        maxLength={300}
        multiline={true}
        numberOfLines={10}
        />
    </View>
  )
}