import React, { useEffect, useState } from 'react'
import { Image, View, Text, FlatList } from "react-native"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {CommentDetailStyles as styles} from './styles'
import { commentItemType, decodeTokenType } from './types'
import jwt_decode from "jwt-decode";
import { atkState, 
         checkCommentWriter,
         commentListPageState, 
         commentLoadingState, 
         commentState, 
         recommentState, 
         showRecommentState,  } 
  from "@recoil/CommunityStack"
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting'
import { useRequestRecomments } from '@components/CommunityDetail/useRequestRecomments'
import { RecommentItem } from '@components/CommunityDetail/RecommentItem'
import { CommentEditBtn, CommentDeleteBtn, RecommentAddBtn } from './ButtonCollection'

export const CommentItem =({ nickName, profileUrl, dateOfWriting, content, commentId}: commentItemType)=> {

  useRequestRecomments({commentId}) // 대댓글 요청 

  const token = useRecoilValue(atkState)
  const decodeToken=  jwt_decode<decodeTokenType>(token|| '') || null
  
  const commentLoading = useRecoilValue(commentLoadingState)
  const commentWriterInfo = useRecoilValue(commentState)
  const recommentList = useRecoilValue(recommentState)
  const showRecomment= useRecoilValue(showRecommentState(commentId))
  
  const [ callOnScrollEnd, setCallOnScrollEnd ] = useState(false)
  const setIsCommentWriter = useSetRecoilState(checkCommentWriter)
  const [ recommentListPage , setRecommentListPage ] = useRecoilState(commentListPageState)

  // 댓글 작성자인지 확인
  const [commentWriter] = commentWriterInfo.map(item=> item.accountModel.id )
  // console.log(typeof decodeToken.user_name) // string
  // console.log(typeof commentWriter) // number

  useEffect(()=> {
    decodeToken.user_name === `${commentWriter}`
      ? setIsCommentWriter(true)
      : setIsCommentWriter(false)
  },[])

  // comments 더 가져오기
   const commentsLoadMore= ()=> { 
    if( commentLoading ) return 
    setRecommentListPage(recommentListPage +1 ) 
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
        <RecommentAddBtn commentId={commentId}/>
        {/* 댓글을 작성한 사람이 아닐경우 버튼 안보이게 */}
        {commentWriter? 
          <View style={styles.edintingBtnBox}>
            <CommentEditBtn commentId={commentId}/>
            <CommentDeleteBtn commentId={commentId}/>
          </View>
          : null
        }
      </View>

      {/* 대댓글 component */}
      {recommentList && showRecomment ?
        (
          <FlatList
            data={recommentList}
            keyExtractor={(item)=> `${item.accountModel.id}${item.accountModel.nickName}`}
            disableVirtualization={false} 
            renderItem={({item}) => (
              <RecommentItem
                nickName= {item.accountModel.nickName}
                profileUrl={item.accountModel.profileImageUrl}
                dateOfWriting={item.commentCommentModel.dateOfWriting}
                content={item.commentCommentModel.content}
                recommentId= {item.commentCommentModel.id}
              />
            )}
            onEndReachedThreshold={0}
            onEndReached={() => setCallOnScrollEnd(true)}
            onMomentumScrollEnd={() => {
              callOnScrollEnd && commentsLoadMore()
              setCallOnScrollEnd(false)
            }}
          />
        ):((<View></View>))}
    </View>
  )
}