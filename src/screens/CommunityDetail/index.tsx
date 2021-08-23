import React, {  useLayoutEffect, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import {
  DetailInfo,
  DetailContents,
  CommentsInput,
  CommentDetail,
} from '@components/CommunityDetail';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useRequestCommunityItem } from '@components/CommunityDetail/useRequestCommunityItem';
import { commentIdState, commentState, 
         communityItemSelector, 
         communityItemState, 
         ImageState, likeState, recommentState, 
         showRecommentState, writerInfoState, 
      } from '@recoil/CommunityStack';
import {LikeBtn} from '@components/CommunityMain/LikeBtn';
import { CommentListType } from '@/src/components/CommunityDetail/types';

export default function CommunityDetailScreen({route, navigation}: CommunityDetailProps) {
  
  const {id} =route.params;
  useRequestCommunityItem(id);
  
  const { content, liked, likeCount } = useRecoilValue(communityItemSelector);
  const [like, setLike] = useRecoilState(likeState(id));

  const setCommunityItem = useSetRecoilState(communityItemState);
  const setImageItem = useSetRecoilState(ImageState);
  const setWriterInfo = useSetRecoilState(writerInfoState);
  const commentId = useRecoilValue(commentIdState)
  const setRecommentList = useSetRecoilState(recommentState(commentId))
  const setCommentList = useSetRecoilState(commentState)
  const setShowRecomment = useSetRecoilState(showRecommentState(commentId));

  //  좋아요 
  const Clickedlike=() => {
    setLike(!like)
  }

  // 클린업 함수
  const cleanUp = () => {   
    setCommunityItem({
      id: id,
      title: '',
      category: '',
      tags: [],
      dateOfRegistration: '',
      content: '',
      liked: false,
      likeCount: 0,
    });
    setImageItem([]);
    setWriterInfo({
      id: 'id',
      nickName: '',
      profileImageUrl: '',
    });
    setCommentList([])
    setRecommentList([])
    setShowRecomment(false)
    // setEditButton(false),
    // setWritingRecomment(false)
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => 
      <TouchableOpacity  onPress={Clickedlike}>
        <LikeBtn id={id} liked={liked} likeCount={likeCount}/>
      </TouchableOpacity>
    })

    return (
      cleanUp()
    )
  },[])

  return (
    <View style={styles.container}>
      <DetailInfo id={id} />
      <ScrollView style={styles.detailContents}>
        <DetailContents content={content} />
        <CommentDetail id={id} />
      </ScrollView>
      <CommentsInput id={id} />
    </View>
  );
}
