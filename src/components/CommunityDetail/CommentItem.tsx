import React, { useEffect, useState } from 'react'
import { Image, View, Text, Animated, TouchableOpacity } from "react-native"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {CommentDetailStyles as styles} from './styles'
import { CommentItemType, decodeTokenType, RecommentListType } from './types'
import jwt_decode from "jwt-decode";
import { atkState, 
         checkCommentWriter,
         commentIdState,
         commentState, 
         recommentState, 
         showRecommentState,  } 
  from "@recoil/CommunityStack"
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting'
import { useRequestRecomments } from '@components/CommunityDetail/useRequestRecomments'
import { CommentEditBtn, CommentDeleteBtn } from './ButtonCollection'
import Recomment from './Recomment/Recomments'

export const CommentItem =({ nickName, profileUrl, dateOfWriting, content, commentId}: CommentItemType)=> {

  const token = useRecoilValue(atkState)
  const decodeToken=  jwt_decode<decodeTokenType>(token|| '') || null

  const setSelectCommentId = useSetRecoilState(commentIdState)
  const commentWriterInfo = useRecoilValue<RecommentListType[]>(commentState)
  const setIsCommentWriter = useSetRecoilState(checkCommentWriter(commentId))

  const recommentList = useRecoilValue<RecommentListType[]>(recommentState(commentId))
  const [showRecomment, setShowRecomment]= useRecoilState(showRecommentState(commentId))

  // 댓글 작성자인지 확인
  console.log(commentWriterInfo)
  const commentWriter = commentWriterInfo.map( item=> item.accountModel.id )
  console.log(decodeToken.user_name) // string
  console.log(...commentWriter) // number
  console.log(decodeToken.user_name === `${commentWriter}`)

  useEffect(()=> {
    decodeToken.user_name == `${commentWriter}`
      ? setIsCommentWriter(true)
      : setIsCommentWriter(false)
  },[])

  // animation 
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0))

  const toggleDropdown = () => {
    setSelectCommentId(commentId)
    setShowRecomment(!showRecomment)
    if (showRecomment == true ) {
        Animated.timing(animatedHeight, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false
        }).start()
    } else {
        Animated.timing(animatedHeight, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }
  }

  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [0, 100],
    // outputRange: [0, 300]
    outputRange: ["0%", "100%"]
})

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
          onPress={()=> toggleDropdown()}>
          <Text style={{color: '#207AB4', fontSize: 12}}>
             {recommentList.length===0? '대댓글 쓰기': '대댓글 보기'}
          </Text>
        </TouchableOpacity>

        {/* 댓글을 작성한 사람이 아닐경우 버튼 안보이게 */}
        {commentWriter? 
          <View style={styles.edintingBtnBox}>
            <CommentEditBtn commentId={commentId}/>
            <CommentDeleteBtn commentId={commentId}/>
          </View>
          : null
        }
      </View>
    
      {/* Recomment 애니메이션 */}
      <Animated.View style={[styles.showingRecomment,
          {maxHeight: interpolatedHeight}]}>
        <Recomment  commentId={commentId}/>
      </Animated.View> 
    </View>
  )
}