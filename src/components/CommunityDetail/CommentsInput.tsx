import instance from '@/src/lib/api/axios';
import { atkState, commentState, commentTextState } from '@/src/recoil/CommunityStack';
import React, { useRef } from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState, useRecoilValue } from 'recoil';
import {CommentInputStyle as styles} from './styles'
import { useRequestComments } from './useRequestComments';

export default function CommentsInput({id}) {
  const token = useRecoilValue(atkState)
  const [commentText, setCommentText] = useRecoilState(commentTextState)
  const postId = id


  const config= { 
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  }

  console.log(postId)
  const addComment= async()=> {
    console.log('comment added!')
    try{
      const response = await instance.post(`/community/comment/post/${postId}`, commentText, config);
      console.log(response)
    } catch(e) {
      console.log(e)
    }
    useRequestComments({id})
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingStyle}
      behavior="position"
    >
      <TextInput 
        placeholder='댓글을 입력하세요' 
        style={styles.commentInputBox}
        onChangeText={text => setCommentText({content: text})} 
        multiline
        value={commentText.content}
      />
      <TouchableOpacity onPress={addComment}>
        <AntDesign name='arrowright' style={commentText? styles.activeArrowIcon:styles.arrowIcon}/>  
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )}