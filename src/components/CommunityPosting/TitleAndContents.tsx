import { communityItemSelector, postingFormState } from '@/src/recoil/CommunityStack'
import React from 'react'
import { View, TextInput } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useRequestCommunityItem } from '../CommunityDetail/useRequestCommunityItem'
import {styles} from './styles'

export default function TitleAndContents({id}: any) {

  // 상세 페이지에서 수정 요청을 보낼때 해당 글 정보받아오기 
  id && useRequestCommunityItem(id) 
  const {title, content} = id? useRecoilValue(communityItemSelector) : {title: '', content:''}

  return (
    <>
      <Title title={title}/>
      <Content content={content}/>
    </>
  )
}

const Title = ({title}: any) => {
  const [fillTitle, setFillTitle] = useRecoilState(postingFormState('title'))
 
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

const Content = ({content}:any) => {
  const [fillContent, setFillContent] = useRecoilState(postingFormState('content'));

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