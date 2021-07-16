import React from 'react'
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styles } from './styles'
import * as colors from '@config/colors';
import {ContentItem, CommentNumber, likeCount} from './types'
import { atom, atomFamily, useRecoilState,  } from 'recoil';

export default function CommunityItem({id, title,dateOfRegistration, writerNickname, imageUrl, commentCount, likeCount, liked, onItemClick }: ContentItem) { 
  
  return (
      <TouchableOpacity 
        style={styles.listItem} 
        activeOpacity={0.8}  
        onPress={onItemClick}
        >
          <Image style={styles.thumnailImage} source={{uri: imageUrl}}/>
          <View style={styles.contentInfo}>
            <Text>{title}</Text>
            <View style={styles.flexBox}>
              <Text>{writerNickname}</Text>
                  <Entypo name='dot-single' size={14} color={colors.BlackText}/>
              <Text>{dateOfRegistration}</Text>
            </View>
          </View>
      <View style= {styles.iconBox}>
        <CommentNum commentNum={commentCount}/>
        <LikeBtn id={id} likeCount={likeCount} liked={liked}/>
      </View>
      </TouchableOpacity>
  )
}

// comment 갯수
const CommentNum = ({commentNum}: CommentNumber ) => {
  return (
    <View style={styles.commentAndLike} >
      <MaterialIcons name='comment' size={14} color={colors.Gray2}/>
      <Text style={{color:colors.Gray2}}>{commentNum}</Text>
    </View>
  )
}

// 게시물 좋아요 상태
const likeState= atomFamily<Element,number>({
  key: 'likeState',
  default: ''
})
// 좋아요 버튼 
const LikeBtn = ({id,likeCount, liked}:{id: number,likeCount: number, liked: boolean}) => {
  const [like, setLike] = useRecoilState(likeState(id))
  const Clickedlike=() => {
    setLike(!like)

  }
  const likeCountNum : number = (
   like
    ? likeCount+1
    : likeCount===0? 0 : likeCount-1
  )

  return (
    <Pressable onPress={Clickedlike} style={styles.commentAndLike} >
      <FontAwesome 
        name='heart' 
        size={14} 
        color={like? colors.Selected : colors.Gray2}
      />
      <Text style={{color:colors.Gray2}}>{likeCountNum}</Text>
    </Pressable>
  )
}