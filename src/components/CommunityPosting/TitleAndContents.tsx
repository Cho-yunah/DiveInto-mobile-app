import { communityItemSelector, postingFormState } from '@/src/recoil/CommunityStack'
import React, { useEffect, useLayoutEffect } from 'react'
import { View, TextInput } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil'
import {styles} from './styles'

export default function TitleAndContents({id}: any) {
 
  const {title, content} = useRecoilValue(communityItemSelector)
  console.log(title)
  console.log(content)
  return (
    <>
      <Title title={title} id={id}/>
      <Content content={content} id={id}/>
    </>
  )
}

const Title = ({title, id}: any) => {
  const [fillTitle, setFillTitle] = useRecoilState(postingFormState('title')) 
  
  useEffect(() => {
     id? setFillTitle(title) : setFillTitle('')
  }, [])
 
  return (
    <View style={styles.inputContainer} >
      <TextInput 
        placeholder='제목을 입력해주세요' 
        placeholderTextColor='#D8D8D8' 
        style={{fontSize: 15}}
        maxLength={60}
        numberOfLines={2}
        multiline={true}
        onChangeText={ text=>  setFillTitle( text )}
        value={fillTitle.toString() }
        />
    </View>
  )
}

const Content = ({content, id}:any) => {
  const [fillContent, setFillContent] = useRecoilState(postingFormState('content'));
  useEffect(() => {
    id? setFillContent(content) : setFillContent('')
  }, [])

  return (
    <View style={styles.inputContainer} >
      <TextInput 
        // ref={textInputRef}
        placeholder='내용을 작성해주세요'
        style={{fontSize: 15, minHeight: 150}} 
        maxLength={300}
        numberOfLines={10}
        placeholderTextColor='#D8D8D8' 
        multiline={true}
        onChangeText={text => setFillContent( text )}
        value={ fillContent.toString()}
        />
    </View>
  )
}