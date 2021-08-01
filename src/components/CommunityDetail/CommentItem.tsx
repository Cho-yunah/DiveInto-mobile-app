import React from 'react'
import { atkState, commentItemType, commentState, commentTextState } from "@/src/recoil/CommunityStack"
import { Image, View, Text, TouchableOpacity } from "react-native"
import {CommentDetailStyles as styles} from './styles'
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting'
import instance from '@/src/lib/api/axios'
import { useRecoilValue } from 'recoil'

export const CommentItem =({ nickName, profileUrl, dateOfWriting, content, commentId }: commentItemType)=> {
  const editingComment= useRecoilValue(commentTextState)
  const token = useRecoilValue(atkState)
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  }

  const requestDelete = async() => {
    console.log('delete!')
    console.log(commentId)
    try {
      const response = await instance.delete(`/community/comment/${commentId}`, config )
    } catch(e) {
      console.log(e)
    }
  }
  const requestEdit = async() => {
    // try{
    //   const response = await instance.put(`/community/post/${commentId}`,editingComment,config);
    // } catch(e) {
    //   console.log(e)
    // }
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