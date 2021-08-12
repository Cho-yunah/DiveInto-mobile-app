import { commentLoadingState, commentState } from '@/src/recoil/CommunityStack';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { View,} from 'react-native';
import { useRecoilValue } from 'recoil';
import { useRequestComments } from './useRequestComments';
import {CommentItem} from './CommentItem';
import CommonLoading  from '@components/common/CommonLoading';

export default function CommentDetail({id}) { 
  useRequestComments({id})

  const commentList = useRecoilValue(commentState)
  const commentLoading = useRecoilValue(commentLoadingState)

  return (
    <View >
    {commentList
    ? (
      <FlatList
        data= {commentList}
        keyExtractor={(item,index)=> `${item.accountModel.id}${item.accountModel.nickName}${index}`}
        nestedScrollEnabled={true}
        ListFooterComponent={commentLoading? CommonLoading : null}
        onEndReachedThreshold={0}

        renderItem={({item}) => (
          <CommentItem
            nickName= {item.accountModel.nickName}
            profileUrl={item.accountModel.profileImageUrl}
            dateOfWriting={item.commentModel.dateOfWriting}
            content={item.commentModel.content}
            commentId= {item.commentModel.id}
          />
        )}
      />
    )
    : (<View></View>)}
    </View>
  )
}