import React, { ReactElement, useLayoutEffect, useEffect } from 'react';
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
import { atkState, checkWriterState, communityItemSelector, communityItemState, decodeTokenType, ImageState, likeState, writerInfoState, writerInfoType } from '@recoil/CommunityStack';
import {LikeBtn} from '@components/CommunityMain/LikeBtn';
import jwt_decode from "jwt-decode";

export default function CommunityDetailScreen({route, navigation}: CommunityDetailProps) {
  
  const {id} =route.params;
  useRequestCommunityItem(id)
  
  const token = useRecoilValue(atkState)
  const decodeToken=  jwt_decode<decodeTokenType>(token|| '') || null
  const writerInfo= useRecoilValue<writerInfoType>(writerInfoState)
  const setCheckWriter = useSetRecoilState(checkWriterState)

  const {content, liked, likeCount } = useRecoilValue(communityItemSelector)
  const [like, setLike] = useRecoilState(likeState(id))

  const setCommunityItem = useSetRecoilState(communityItemState);
  const setImageItem = useSetRecoilState(ImageState)
  const setWriterInfo = useSetRecoilState(writerInfoState)

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
      likeCount: 0
    })
    setImageItem([])
    setWriterInfo({
      id: 'id', 
      nickName: '', 
      profileImageUrl: ''
    })
  }

  useEffect(()=> {
    navigation.setOptions({
      headerRight: () => 
      <TouchableOpacity  onPress={Clickedlike}>
        <LikeBtn id={id} liked={liked} likeCount={likeCount}/>
      </TouchableOpacity>
    })
    cleanUp()

     // 로그인한 사람과 글 게시한 사람이 일치하는지
    decodeToken.user_name == writerInfo.id 
    ? setCheckWriter(true)
    : setCheckWriter(false)
  },[like])

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
