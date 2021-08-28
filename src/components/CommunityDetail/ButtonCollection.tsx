import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import { useSetRecoilState } from 'recoil'
import { getInstanceATK } from '@lib/api/axios'
import { commentIdState, 
        commentInputButtonState, 
        commentInputFocusState, 
        commentRequestState,
        recommentRequestState,
        refreshQuestionState,
        refreshShareState, 
        } 
  from '@recoil/CommunityStack'
import { IdProps } from './types'
import CommonModal from '../common/CommonModal'
import { useNavigation } from '@react-navigation/native'


// 댓글 수정
// 수정 버튼을 누르면 CommentTextInput이 댓글을 수정할수 있는 상태로 바뀜
export const EditBtn=({id, commentId}: IdProps) => {

  const navigation = useNavigation();
  const setIsFocus = useSetRecoilState(commentInputFocusState)
  const setSelectCommentId = useSetRecoilState(commentIdState)
  const setEditButton = useSetRecoilState(commentInputButtonState)

  const editContent= () => {
    navigation.navigate('CommunityPosting', { id })
  }

  const editComment = () => {
    setIsFocus(true)
    setSelectCommentId(commentId)
    setEditButton(true)
  }

  return (
    <TouchableOpacity onPress={ id? editContent:  editComment }>
      <Text style={{color: '#A9BBC9', fontSize: 12 }}>수정</Text>
    </TouchableOpacity>
  )
}

// 댓글 or 대댓글 삭제
export const DeleteBtn= ({id, commentId, recommentId}: IdProps) => {

  const navigation = useNavigation();
  const setRefreshShare= useSetRecoilState(refreshShareState)
  const setRefreshQuestion= useSetRecoilState(refreshQuestionState)

  const setRequestSuccess = useSetRecoilState(commentRequestState)
  const setRecommentSuccess = useSetRecoilState(recommentRequestState)
  const [show, setShow] = useState(false);

  const toggleShowModal = () => {
    setShow(!show)
  }

  // 게시물 전체 삭제
  const deleteContents=async () => {
    const instanceAtk = await getInstanceATK();
    console.log(id)
    try {
      await instanceAtk.delete(`/community/post/${id}`)
      setRefreshShare(true)
      setRefreshQuestion(true)
      navigation.navigate('CommunityMain');
      setShow(!show); //모달 닫기
    } catch (e) {
      console.log(e);
    }
  };

  // 댓글, 대댓글 삭제
  const requestDelete = async() => {
    console.log(commentId)
    console.log(recommentId)
    const instanceAtk = await getInstanceATK();
    try {
      await instanceAtk.delete(`/community/comment/${commentId || recommentId}`)
      commentId
        ? setRequestSuccess(true) 
        : setRecommentSuccess(true)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleShowModal}>
        <Text style={{color: '#E93A55', fontSize: 12 }}>삭제</Text>
      </TouchableOpacity>
      <CommonModal
          show={show}
          desc={id
                ? "게시글을 삭제하시겠습니까?" 
                : "댓글을 삭제하시겠습니까?"}
          toggleShowModal={toggleShowModal}
          onClickConfirm={id? deleteContents : requestDelete  }
        />
    </View>
  )
}