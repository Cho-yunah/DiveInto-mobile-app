import React, { useEffect} from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getInstanceATK } from '@lib/api/axios';
import { commentIdState, commentInputButtonState, commentInputFocusState, commentRequestState, commentTextState, recommentRequestState, recommentTextState, writingRecommentState } from '@recoil/CommunityStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CommentInputStyle as styles} from './styles'

export default function CommentsInput({id}: {id: number}) {
  const postId = id // 댓글 추가시 게시물 아이디

  const [comment, setComment] = useRecoilState(commentTextState)
  const [recomment, setRecomment] = useRecoilState(recommentTextState)

  const setRequestSuccess = useSetRecoilState(commentRequestState)
  const setRecommentSuccess = useSetRecoilState(recommentRequestState)

  const isFocus = useRecoilValue(commentInputFocusState)
  const commentId = useRecoilValue(commentIdState) // 수정 요청시 댓글 아이디
  const [editButton, setEditButton]= useRecoilState(commentInputButtonState)
  const [writingRecomment, setWritingRecomment] = useRecoilState(writingRecommentState)

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
      // console.log(data)
      setRequestSuccess(true)  
      setComment({content:''})
      setEditButton(false)
    } catch(e) {
      console.log(e)
    }
  }

  // 대댓글 추가
  const addRecomment = async() => {
    const instanceAtk = await getInstanceATK();
    try{
      // console.log('commentId',commentId)
      const {data} = await instanceAtk.post(`/community/comment/${commentId}/comment`, recomment)
      // console.log(data)
      setRecommentSuccess(true)
      setWritingRecomment(true)
      setRecomment({content:''})
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(()=> {
    setEditButton(false)
    setWritingRecomment(false)
  },[])

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingStyle}
      behavior="position"
    >
      <TextInput 
        placeholder={writingRecomment
                      ? '대댓글을 입력하세요'
                      : '댓글을 입력하세요' }
        style={writingRecomment
                ? styles.recommentInput
                : styles.commentInputBox
              }
        onChangeText={
          text => writingRecomment
            ? (setRecomment({content: text}), setComment({content: ''}))
            : (setRecomment({content: ''}), setComment({content: text})) 
        } 
        multiline
        value={writingRecomment? recomment.content: comment.content}
        autoFocus={isFocus}
      />
      {editButton
        ? ( <TouchableOpacity onPress={editComment}>
              <Text style={styles.editButton}>수정완료</Text>
            </TouchableOpacity>)
        : ( <TouchableOpacity 
              onPress={writingRecomment? addRecomment:  addComment}>
              <AntDesign 
                name='arrowright' 
                style={comment.content
                        ? (writingRecomment
                            ? styles.recommentArrowIcon 
                            : styles.activeArrowIcon) 
                        : styles.arrowIcon}
              />  
            </TouchableOpacity>)
      }
    </KeyboardAvoidingView>
  )}