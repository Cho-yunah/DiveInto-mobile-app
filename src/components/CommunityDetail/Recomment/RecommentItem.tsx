import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {RecommentDetailStyles as styles} from '../styles'
import { getInstanceATK } from '@lib/api/axios'
import { atkState, checkRecommentWriter, decodeTokenType, recommentItemType, recommentRequestState, recommentState } from '@recoil/CommunityStack'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting'
import jwt_decode from "jwt-decode";
import { RecommentListType } from '../types'

export const RecommentItem =({nickName, profileUrl, dateOfWriting, content, recommentId, commentId}: recommentItemType) => {

  const token = useRecoilValue(atkState)
  const decodeToken=  jwt_decode<decodeTokenType>(token|| '') || null
  const recommentWriterInfo = useRecoilValue<RecommentListType[]>(recommentState(commentId))
  const [recommentWriter] = recommentWriterInfo.map(item=> item.accountModel.id)
  const [isRecommentWriter, setIsRecommentWriter] = useRecoilState(checkRecommentWriter)

  const[recommentSuccess, setRecommentSuccess] = useRecoilState(recommentRequestState)

   // 대댓글 삭제
   const requestDelete = async() => {
    const instanceAtk = await getInstanceATK();
    console.log(recommentId)
    try {
      await instanceAtk.delete(`/community/comment/${recommentId}`)
      setRecommentSuccess(true) 
    } catch(e) {
      console.log(e)
    }
  }

  decodeToken.user_name == `${recommentWriter}`
    ? setIsRecommentWriter(true)
    : setIsRecommentWriter(false)

  return (
    <View style={styles.recommentBox}>
      <View style={styles.writerInfo}>
        <Image style={styles.profileImg} source={{uri:profileUrl}}/>
        <Text style={styles.nickname}> 
        {nickName} 
        </Text>
        <Text style= {styles.date}>
          <TimeOfWriting time={dateOfWriting}/>
        </Text>
      </View>
      <View style={styles.contentBox} >
        <Text style={styles.recomment} >{content}</Text>
        {isRecommentWriter ?
          <TouchableOpacity onPress={requestDelete}>
            <Text style={styles.deleteBtn}>삭제</Text>
          </TouchableOpacity>
          : null
        }
      </View>
    </View>
  )
}