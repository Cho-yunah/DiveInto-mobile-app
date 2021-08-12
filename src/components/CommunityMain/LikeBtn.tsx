import React from 'react';
import { View, Text } from 'react-native'
import { atkState, likeState } from "@/src/recoil/CommunityStack"
import { useRecoilState, useRecoilValue } from "recoil"
import { likeBtnPropsType } from './types';
import {styles} from "./styles"
import * as colors from '@config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import instance from '@/src/lib/api/axios';

// 좋아요 버튼 
export const LikeBtn= ({id, likeCount, liked, mainList}:likeBtnPropsType) => {
  const token = useRecoilValue(atkState)
  const config= { 
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  }
  const [like, setLike] = useRecoilState(likeState(id))
  const likeCountNumber = (
    liked ? (like? likeCount: likeCount-1)
          :(like? likeCount +1 
          : likeCount ===0 
          ? 0  : likeCount)
  )

  const Clickedlike= async() => {
    try{
      console.log(id, like)
      liked 
      ? await instance.delete(`/community/post/${id}/like`, config)
      : await instance.post(`/community/post/${id}/like`, config) 
      // post(`/community/post/${id}/like`)
      console.log('dfsdf')
      setLike(!like)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.commentAndLike} >
        <FontAwesome 
          name='heart' 
          size={14} 
          color={liked || like? colors.Selected : colors.Gray2}
        />
        {mainList
          ? <Text style={{color:colors.Gray2}}> {likeCountNumber}</Text>
          : <View></View>}
      
    </View>
  )
}