import React, { useRef } from 'react'
import { commentIdState, commentInputButtonState, commentInputFocusState, commentItemType, commentRequestState, commentState, recommentState, showRecommentState, writingRecommentState,  } from "@/src/recoil/CommunityStack"
import { Image, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, FlatList } from "react-native"
import {CommentDetailStyles as styles} from './styles'
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting'
import { getInstanceATK } from '@/src/lib/api/axios'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useRequestRecomments } from './useRequestRecomments'
import { RecommentItem } from './RecommentItem'

export const CommentItem =({ nickName, profileUrl, dateOfWriting, content, commentId}: commentItemType)=> {

  useRequestRecomments({commentId}) // 대댓글 요청 

  const [RequestSuccess, setRequestSuccess] = useRecoilState(commentRequestState)
  const [isFocus, setIsFocus] = useRecoilState(commentInputFocusState)
  const [selectCommentId, setSelectCommentId] = useRecoilState(commentIdState)
  const [editButton, setEditButton] = useRecoilState(commentInputButtonState)
  const [writingRecomment, setWritingRecomment] = useRecoilState(writingRecommentState)
  const recommentList = useRecoilValue(recommentState)
  const [showRecomment, setShowRecomment] = useRecoilState(showRecommentState)

  // 댓글 삭제
  const requestDelete = async() => {
    const instanceAtk = await getInstanceATK();
    console.log(commentId)
    try {
      await instanceAtk.delete(`/community/comment/${commentId}`)
      setRequestSuccess(true) 
    } catch(e) {
      console.log(e)
    }
  }
  // 댓글 수정
  const editing = () => {
    setIsFocus(true)
    setSelectCommentId(commentId)
    setEditButton(true)
  }
  // 대댓글 추가
  const recommentWriting = ()=> {
    setSelectCommentId(commentId)
    setWritingRecomment(!writingRecomment)
    setShowRecomment(!showRecomment)
  }

  return (
    <View style={styles.commentBox}>
      <View style={styles.commentInfo}>
        <Image style={styles.image} source={{uri:profileUrl}}/>
        <Text style={styles.nicknameStyle}> 
          {nickName} 
        </Text>
        <Text style= {styles.dateStyle}>
          <TimeOfWriting time={dateOfWriting}/>
        </Text>
      </View>
      <Text style= {styles.comment}>{content}</Text>

      {/* 댓글내 버튼 모음*/}
      <View style={styles.buttonBox} >
        <TouchableOpacity 
          onPress={recommentWriting}>
          <Text style={{color: '#207AB4', fontSize: 12}}>
            {recommentList? '대댓글 보기': '대댓글 쓰기'}
          </Text>
        </TouchableOpacity>
        <View style={styles.edintingBtnBox}>
          <EditBtn editing={editing}/>
          <DeleteBtn requestDelete={requestDelete}/>
        </View>
      </View>

      {/* 대댓글 component */}
      {recommentList && showRecomment ?
        (
          <FlatList
            data={recommentList}
            keyExtractor={(item)=> `${item.accountModel.id}${item.accountModel.nickName}`}
            renderItem={({item}) => (
              <RecommentItem
                nickName= {item.accountModel.nickName}
                profileUrl={item.accountModel.profileImageUrl}
                dateOfWriting={item.commentCommentModel.dateOfWriting}
                content={item.commentCommentModel.content}
                recommentId= {item.commentCommentModel.id}
              />
            )}
          />
        ):((<View></View>))}
    </View>
  )
}

const EditBtn=({editing}: any) => {
  return (
    <TouchableOpacity onPress={editing}>
      <Text style={{color: '#A9BBC9', fontSize: 12 }}>수정</Text>
    </TouchableOpacity>
  )
}

const DeleteBtn= ({requestDelete}) => {
  return (
    <TouchableOpacity onPress={requestDelete}>
      <Text style={{color: '#E93A55', fontSize: 12 }}>삭제</Text>
    </TouchableOpacity>
  )
}