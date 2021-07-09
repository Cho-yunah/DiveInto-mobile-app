import React from 'react'
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'
import * as colors from '@config/colors';
import {ContentItem, CommentNumber, likeCount} from './types'
import { atom, useRecoilState } from 'recoil';

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
        <Like likeCount={likeCount}/>
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

const likeState= atom({
  key: 'likeState',
  default: false
})

const likeCountState = atom({
  key: 'likeCountState',
  default: 0
})


// 게시물 좋아요 갯수
const Like = ({likeCount}:likeCount) => {
  const [like, setLike] = useRecoilState(likeState)
  const [likeCountNum, setLikeCountNum] = useRecoilState<number>(likeCountState)

  const Clickedlike=() => {
    setLike(!like)   
    like? setLikeCountNum(likeCountNum-1) : setLikeCountNum(likeCountNum+1)
  }

  return (
    <Pressable onPress={ Clickedlike} style={styles.commentAndLike} >
      <FontAwesome 
        name='heart' 
        size={14} 
        color={like? colors.Selected : colors.Gray2}
      />
      <Text style={{color:colors.Gray2}}>{likeCount+likeCountNum}</Text>
    </Pressable>
  )
}