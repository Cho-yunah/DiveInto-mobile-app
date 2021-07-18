import { communityItemSelector, postingFormSelector } from '@/src/recoil/CommunityStack'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View, TextInput } from 'react-native'
import {atomFamily, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useRequestCommunityItem } from '../CommunityDetail/useRequestCommunityItem'
import {styles} from './styles'

export const postingFormState = atomFamily<Element, string>({
  key: 'postingFormState',
  default: ''
})
export default function TitleAndContents({id}: any) {

  // 상세 페이지에서 수정 요청을 보낼때 해당 글 정보받아오기 
  id && useRequestCommunityItem(id) 
  const {title, content} = useRecoilValue(communityItemSelector)

  return (
    <>
      <Title title={title}/>
      <Contents content={content}/>
    </>
  )
}

const Title = ({title}: any) => {
  const [fillTitle, setFillTitle] = useRecoilState(postingFormState('title'))

  useLayoutEffect(() => {
    setFillTitle(title)
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
const Contents = ({content}:any) => {
  
  const [fillContents, setFillContents] = useRecoilState(postingFormState('contents'));

  useLayoutEffect(() => {
    setFillContents(content)
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
        onChangeText={text => setFillContents( text )}
        value={ fillContents.toString()}
        />
    </View>
  )
}