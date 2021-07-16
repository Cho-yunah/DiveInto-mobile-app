import React from 'react'
import { View, TextInput } from 'react-native'
import {  atomFamily,useRecoilState, useRecoilValue } from 'recoil'
import {styles} from './styles'
import {inputTextType} from './types'

export const postingFormState = atomFamily<Element, string>({
  key: 'postingFormState',
  default: ''
})

export default function TitleAndContents() {
  return (
    <>
      <Title />
      <Contents />
    </>
  )
}

const Title = () => {
  const [title, setTitle] = useRecoilState(postingFormState('title'))

  return (
    <View style={styles.inputContainer} >
      <TextInput 
        placeholder='제목을 입력해주세요' 
        placeholderTextColor='#D8D8D8' 
        style={{fontSize: 15}}
        maxLength={60}
        numberOfLines={2}
        multiline={true}
        onChangeText={(text)=> {
          setTitle( text )
        }}
        value={title.toString()}
        />
    </View>
  )
}
const Contents = () => {
  const [contents, setContents] = useRecoilState(postingFormState('contents'))
  // console.log(contents)
  return (
    <View style={styles.inputContainer} >
      <TextInput 
        placeholder='내용을 작성해주세요'
        style={{fontSize: 15, minHeight: 150}} 
        maxLength={300}
        numberOfLines={10}
        placeholderTextColor='#D8D8D8' 
        multiline={true}
        onChangeText={(text)=> {
          setContents(text)
        }}
        value={contents.toString()}
        />
    </View>
  )
}