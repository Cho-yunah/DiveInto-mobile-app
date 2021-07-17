import React from 'react'
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styles } from './styles'
import * as colors from '@config/colors';
import {ContentItem, CommentNumber} from './types'
import {  useRecoilState  } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import { likeState } from '@/src/recoil/CommunityStack';

export default function CommunityItem({id, title,dateOfRegistration, writerNickname, imageUrl, commentCount, likeCount, liked }: ContentItem) { 
  const navigation = useNavigation();
  
  return (
      <TouchableOpacity 
        style={styles.listItem} 
        activeOpacity={0.8}  
        onPress={()=> navigation.navigate('CommunityDetail',{id})}
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

// 좋아요 버튼 
const LikeBtn = ({id,likeCount, liked}:{id: number,likeCount: number, liked: boolean}) => {
  const [like, setLike] = useRecoilState(likeState(id))
  const Clickedlike=() => {
    setLike(!like)
  }

const likeCountNumber = (
  liked ? (like? likeCount: likeCount-1)
        :(like? likeCount +1 
              : likeCount ===0 
              ? 0 
              : likeCount)
)
// console.log(likeCountNumber)

  return (
    <Pressable onPress={Clickedlike} style={styles.commentAndLike} >
      <FontAwesome 
        name='heart' 
        size={14} 
        color={like? colors.Selected : colors.Gray2}
      />
      <Text style={{color:colors.Gray2}}>{likeCountNumber}</Text>
    </Pressable>
  )
}