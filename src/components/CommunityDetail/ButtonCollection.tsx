import React from 'react'
import { Text, TouchableOpacity } from "react-native"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { getInstanceATK } from '@lib/api/axios'
import { commentIdState, 
        commentInputButtonState, commentInputFocusState, 
        commentRequestState, 
        recommentState, 
        showRecommentState, 
        writingRecommentState } 
  from '@recoil/CommunityStack'
import { CommentIdProps } from './types'


// 댓글 수정
// 수정 버튼을 누르면 CommentTextInput이 댓글을 수정할수 있는 상태로 바뀜
export const CommentEditBtn=({commentId}: CommentIdProps) => {
  const setIsFocus = useSetRecoilState(commentInputFocusState)
  const setSelectCommentId = useSetRecoilState(commentIdState)
  const setEditButton = useSetRecoilState(commentInputButtonState)

  const editing = () => {
    setIsFocus(true)
    setSelectCommentId(commentId)
    setEditButton(true)
  }

  return (
    <TouchableOpacity onPress={ editing }>
      <Text style={{color: '#A9BBC9', fontSize: 12 }}>수정</Text>
    </TouchableOpacity>
  )
}

// 댓글 삭제
export const CommentDeleteBtn= ({commentId}: CommentIdProps) => {
  const setRequestSuccess = useSetRecoilState(commentRequestState)

  const requestDelete = async() => {
    const instanceAtk = await getInstanceATK();
    try {
      await instanceAtk.delete(`/community/comment/${commentId}`)
      setRequestSuccess(true) 
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <TouchableOpacity onPress={requestDelete}>
      <Text style={{color: '#E93A55', fontSize: 12 }}>삭제</Text>
    </TouchableOpacity>
  )
}

// 대댓글 추가 
// 추가 버튼을 누르면 CommentTextInput이 대댓글을 추가할수 있는 상태로 바뀜
export const RecommentAddBtn =({commentId}: CommentIdProps) => {
  const setSelectCommentId = useSetRecoilState(commentIdState)
  const [writingRecomment, setWritingRecomment] = useRecoilState(writingRecommentState)
  const [showRecomment, setShowRecomment] = useRecoilState(showRecommentState(commentId))
  const recommentList = useRecoilValue(recommentState(commentId))

  const recommentWriting = ()=> {
    setSelectCommentId(commentId)
    setWritingRecomment(!writingRecomment)
    setShowRecomment(!showRecomment)
  }

  return (
    <TouchableOpacity 
    onPress={recommentWriting}>
    <Text style={{color: '#207AB4', fontSize: 12}}>
      {recommentList.length===0? '대댓글 쓰기': '대댓글 보기'}
    </Text>
  </TouchableOpacity>
  )
}