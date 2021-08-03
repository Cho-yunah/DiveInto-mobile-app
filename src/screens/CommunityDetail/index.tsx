import React, { useEffect } from 'react'
import { ScrollView, View,TouchableOpacity } from 'react-native';
import styles  from './styles';
import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import { DetailInfo, DetailContents, CommentsInput, CommentDetail  } from '@components/CommunityDetail';
import { useRequestCommunityItem } from '@components/CommunityDetail/useRequestCommunityItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentInputFocusState, commentState, communityItemSelector, likeState } from '@/src/recoil/CommunityStack';
import {LikeBtn} from '@components/CommunityMain/LikeBtn';


export default function CommunityDetailScreen({route, navigation}: CommunityDetailProps) {
  
  const {id} =route.params;
  useRequestCommunityItem(id)
  
  const {content, liked, likeCount } = useRecoilValue(communityItemSelector)
  
  //  좋아요 post 요청 함수 가져와서 호출하기
  const [like, setLike] = useRecoilState(likeState(id))
  const Clickedlike=() => {
    setLike(!like)
  }
  
  // // 댓글 수정
  // const textInputRef= useRef<HTMLInputElement|null >(null)
  // const editing = ()=> {
  //   console.log('editing click!')
  //   textInputRef.current && textInputRef.current.focus()
  // }
 
  // 헤더에 좋아요 하트 버튼
  useEffect(()=> {
    navigation.setOptions({
      headerRight: () => 
      <TouchableOpacity  onPress={Clickedlike}>
        <LikeBtn id={id} liked={liked} likeCount={likeCount}/>
      </TouchableOpacity>
    })
  },[like])

  return (
    <View style={styles.container}>
      <DetailInfo id={id} />
      <ScrollView>
        <DetailContents content={content}/>
        <CommentDetail id={id}/>
      </ScrollView>
      <CommentsInput id={id} />
    </View>
  );
}