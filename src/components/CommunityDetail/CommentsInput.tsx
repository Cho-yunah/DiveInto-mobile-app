import instance from '@/src/lib/api/axios';
import { atkState, commentState, commentTextState, postIdState } from '@/src/recoil/CommunityStack';
import React from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState, useRecoilValue } from 'recoil';
import {CommentInputStyle as styles} from './styles'

export default function CommentsInput() {
  const token = useRecoilValue(atkState)
  const [commentText, setCommentText] = useRecoilState(commentTextState)
  const [postId, setPostId] = useRecoilState(postIdState)

  const config= { 
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  }

  const addComment= async()=> {
    console.log('comment added!')
    try{
      const response = await instance.post(`/community/comment/post/${postId}`, commentText, config);
      console.log(response)
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
        onChangeText={text => setCommentText({content: text})}
        multiline
        value={commentText.content}
      />
      <TouchableOpacity onPress={addComment}>
        <AntDesign name='arrowright' style={commentText? styles.activeArrowIcon:styles.arrowIcon}/>  
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )}