import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  commentListPageState,
  commentLoadingState,
  commentState,
} from '@recoil/CommunityStack';
import { useRequestComments } from '@components/CommunityDetail/useRequestComments';
import { CommentItem } from '@components/CommunityDetail/CommentItem';
import CommonLoading from '@components/common/CommonLoading';
import { CommentListType } from './types';

export default function CommentDetail({ id }: { id: number }) {
  useRequestComments({ id });

  const commentList = useRecoilValue<CommentListType[]>(commentState);
  const commentLoading = useRecoilValue(commentLoadingState);
  const [callOnScrollEnd, setCallOnScrollEnd] = useState(false);
  const [commentListPage, setCommentListPage] =
    useRecoilState(commentListPageState);

  // comments 더 가져오기
  const commentsLoadMore = () => {
    if (commentLoading) return;
    setCommentListPage(commentListPage + 1);
  };

  return (
    <>
      {commentList ? (
        <FlatList
          data={commentList}
          keyExtractor={(item, index) =>
            `${item.accountModel.id}${item.accountModel.nickName}${index}`
          }
          nestedScrollEnabled={true}
          ListFooterComponent={commentLoading ? CommonLoading : null}
          onEndReachedThreshold={0}
          disableVirtualization={false}
          renderItem={({ item }) => (
            <CommentItem
              commentWriterId={item.accountModel.id}
              nickName={item.accountModel.nickName}
              profileUrl={item.accountModel.profileImageUrl}
              dateOfWriting={item.commentModel.dateOfWriting}
              content={item.commentModel.content}
              commentId={item.commentModel.id}
            />
          )}
          onEndReached={() => setCallOnScrollEnd(true)}
          onMomentumScrollEnd={() => {
            callOnScrollEnd && commentsLoadMore();
            setCallOnScrollEnd(false);
          }}
        />
      ) : (
        <View></View>
      )}
    </>
  );
}
