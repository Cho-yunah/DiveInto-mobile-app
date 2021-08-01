import instance, { getInstanceATK } from '@/src/lib/api/axios';
import { commentTextState } from '@/src/recoil/CommunityStack';
import React, { useRef } from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState, useRecoilValue } from 'recoil';
import {CommentInputStyle as styles} from './styles'

export default function CommentsInput({id}) {
  const [comment, setComment] = useRecoilState(commentTextState)
  const postId = id

  const addComment= async()=> {
    const instanceAtk = await getInstanceATK();
    try{
      // 댓글 post
      const data = await instanceAtk.post(`/community/comment/post/${postId}`, comment)
      // console.log(data)

      // 댓글 목록 조회 재요청
      const commentResource = await instance.get(`/community/comment/post/${id}?page=0&size=5`)
      console.log(commentResource)
      commentResource.data._embedded
      && setComment(commentResource.data._embedded.commentsModelList)
   
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