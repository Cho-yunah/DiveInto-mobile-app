import { getInstanceATK } from '@api/axios';
import { recommentRequestState, recommentTextState } from '@recoil/CommunityStack';
import React from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {styles} from './styles'

export default function RecommentInput({commentId}: {commentId: number}) {
  
  const [recomment, setRecomment] = useRecoilState(recommentTextState)
  const setRecommentSuccess = useSetRecoilState(recommentRequestState)

   // 대댓글 추가
   const addRecomment = async() => {
    const instanceAtk = await getInstanceATK();
    try{
      // console.log('commentId',commentId)
      const {data} = await instanceAtk.post(`/community/comment/${commentId}/comment`, recomment)
      // console.log(data)
      setRecommentSuccess(true)
      setRecomment({content:''})
    } catch(e) {
      console.log(e)
    }
  } 

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingStyle}
      behavior="position"
    >
      <TextInput 
        placeholder={'대댓글을 입력하세요'}
        style={styles.recommentInput}
        onChangeText={text => setRecomment({content: text})} 
        multiline
        value={recomment.content}
      />
      <TouchableOpacity >
        <AntDesign 
          name='arrowright'
          onPress={addRecomment} 
          style={recomment.content.length >= 3
                  ? styles.recommentArrowIcon 
                  : styles.arrowIcon}
        />  
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
  )
}