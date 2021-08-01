import { getInstanceATK } from '@/src/lib/api/axios';
import { commentRequestState, commentTextState } from '@/src/recoil/CommunityStack';
import React, { useRef, useState } from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState } from 'recoil';
import {CommentInputStyle as styles} from './styles'

export default function CommentsInput({id}) {
  const [comment, setComment] = useRecoilState(commentTextState)
  const postId = id
  const [RequestSuccess, setRequestSuccess] = useRecoilState(commentRequestState)

  // 댓글 추가
  const addComment= async()=> {
    const instanceAtk = await getInstanceATK();
    try{
      const data = await instanceAtk.post(`/community/comment/post/${postId}`, comment)
      setRequestSuccess(true)  
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
        placeholder='댓글을 입력하세요' 
        style={styles.commentInputBox}
        onChangeText={text => setComment({content: text})} 
        multiline
        value={comment.content}
      />
      <TouchableOpacity onPress={addComment}>
        <AntDesign name='arrowright' style={comment? styles.activeArrowIcon:styles.arrowIcon}/>  
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )}