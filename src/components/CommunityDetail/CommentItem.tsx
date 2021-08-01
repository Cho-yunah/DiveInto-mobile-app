import React from 'react'
import { commentItemType, commentRequestState, commentState, commentTextState } from "@/src/recoil/CommunityStack"
import { Image, View, Text, TouchableOpacity } from "react-native"
import {CommentDetailStyles as styles} from './styles'
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting'
import { getInstanceATK } from '@/src/lib/api/axios'
import { useRecoilState, useRecoilValue } from 'recoil'

export const CommentItem =({ nickName, profileUrl, dateOfWriting, content, commentId }: commentItemType)=> {
  const editingComment= useRecoilValue(commentTextState)
  const [commentList, setCommentList] = useRecoilState(commentState)
  const [RequestSuccess, setRequestSuccess] = useRecoilState(commentRequestState)

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

  return (
    <View style={styles.commentBox}>
      <View style={styles.commentWriterInfo}>
        <Image style={styles.image} source={{uri:profileUrl}}/>
        <Text style={styles.nicknameStyle}> 
          {nickName} 
        </Text>
      </View>
      <Text style= {styles.dateStyle}>
        <TimeOfWriting time={dateOfWriting}/>
      </Text>
      <Text style= {styles.comment}>{content}</Text>
      <TouchableOpacity style={styles.commentsInComment}>
        <Text style={{color: '#207AB4', fontSize: 12}}>대댓글 쓰기</Text>
      </TouchableOpacity>
      <View style={styles.edintingBtnBox}>
        <EditBtn />
        <DeleteBtn requestDelete={requestDelete}/>
      </View>
    </View>
  )
}

const EditBtn=({navigation, id}: any) => {
  return (
    <TouchableOpacity >
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