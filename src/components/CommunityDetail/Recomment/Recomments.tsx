import React from 'react'
import RecommentInput from './RecommentInput'
import { RecommentItem } from './RecommentItem'
import {CommentDetailStyles as styles} from '../styles'
import { useRecoilValue } from 'recoil'
import { recommentState } from '@recoil/CommunityStack'
import { FlatList } from 'react-native-gesture-handler'
import { RecommentListType } from '../types'

export default function Recomment({commentId}) {

  const recommentList = useRecoilValue<RecommentListType[]>(recommentState(commentId))
  
  return (
    <>
      <RecommentInput commentId={commentId}/>
      <FlatList
        data={recommentList}
        keyExtractor={(item)=> `${item.commentCommentModel.id}${item.accountModel.nickName}`}
        disableVirtualization={false} 
        renderItem={({item}) => (
          <RecommentItem
            nickName= {item.accountModel.nickName}
            profileUrl={item.accountModel.profileImageUrl}
            dateOfWriting={item.commentCommentModel.dateOfWriting}
            content={item.commentCommentModel.content}
            recommentId= {item.commentCommentModel.id}
            commentId= {commentId}
          />
        )}
      />
    </>
  )
}