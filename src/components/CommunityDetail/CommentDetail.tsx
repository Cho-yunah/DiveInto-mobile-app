import React, { useEffect } from 'react';
import { View, FlatList} from 'react-native';
import { useRecoilValue } from 'recoil';
import { commentLoadingState, commentState } from '@recoil/CommunityStack';
import { useRequestComments } from '@components/CommunityDetail/useRequestComments';
import {CommentItem} from '@components/CommunityDetail/CommentItem';
import CommonLoading  from '@components/common/CommonLoading';

export default function CommentDetail({id}:{id: number}) { 
  useRequestComments({id})

  const commentList = useRecoilValue(commentState)
  const commentLoading = useRecoilValue(commentLoadingState)

  return (
    < >
    {commentList
    ? (
      <FlatList
        data= {commentList}
        keyExtractor={(item,index)=> `${item.accountModel.id}${item.accountModel.nickName}${index}`}
        nestedScrollEnabled={true}
        ListFooterComponent={commentLoading? CommonLoading : null}
        onEndReachedThreshold={0}
        disableVirtualization={false} 

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
    </>
  )
}