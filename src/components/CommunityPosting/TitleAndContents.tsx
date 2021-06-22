import React from 'react'
import { View, TextInput } from 'react-native'
import {styles} from './styles'
import {inputTextType} from './types'

export default function TitleAndContents() {
  return (
    <>
      <InputText 
        placeholder='제목을 입력해주세요' 
        style={{fontSize: 15}}
        maxLength={60}
        numberOfLines={2}
        />
      <InputText 
        placeholder='내용을 작성해주세요'
        style={{fontSize: 15, minHeight: 150}} 
        maxLength={300}
        numberOfLines={10}
      />
    </>
  )
}

const InputText = ({placeholder, style, maxLength, numberOfLines}: inputTextType) => {
  return (
    <View style={styles.inputContainer} >
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor='#D8D8D8' 
        style={style}
        maxLength={maxLength}
        multiline={true}
        numberOfLines={numberOfLines}
        />
    </View>
  )
}