import { getInstanceATK } from '@/src/lib/api/axios';
import { commentIdState, commentInputButtonState, commentInputFocusState, commentRequestState, commentTextState } from '@/src/recoil/CommunityStack';
import React, { useEffect } from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState, useRecoilValue } from 'recoil';
import {CommentInputStyle as styles} from './styles'

export default function CommentsInput({id }) {
  const [comment, setComment] = useRecoilState(commentTextState)
  const postId = id // 댓글 추가시 게시물 아이디
  const [RequestSuccess, setRequestSuccess] = useRecoilState(commentRequestState)
  const isFocus = useRecoilValue(commentInputFocusState)
  const commentId = useRecoilValue(commentIdState) // 수정 요청시 댓글 아이디
  const [editButton, setEditButton]= useRecoilState(commentInputButtonState)
  
  useEffect(()=> {
    setEditButton(false)
  },[])

  // 댓글 추가
  const addComment= async()=> {
    const instanceAtk = await getInstanceATK();
    try{
      const data = await instanceAtk.post(`/community/comment/post/${postId}`, comment)
      setRequestSuccess(true)  
      setComment({content:''})
    } catch(e) {
      console.log(e)
    }
  }

  // 댓글 수정 
  const editComment= async()=> {
    const instanceAtk = await getInstanceATK();
    try{
      const data = await instanceAtk.put(`/community/comment/${commentId}`, comment)
      setRequestSuccess(true)  
      setComment({content:''})
      setEditButton(false)
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
        // ref= {textInputRef}
        autoFocus={isFocus}
      />
      {editButton?
      (
        <TouchableOpacity onPress={editComment}>
          <Text style={styles.editButton}>수정완료</Text>
        </TouchableOpacity>
      ):(
        <TouchableOpacity onPress={addComment}>
          <AntDesign 
            name='arrowright' 
            style={comment.content
                    ? styles.activeArrowIcon 
                    : styles.arrowIcon}/>  
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  )}