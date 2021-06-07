import React, { useState } from 'react'
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'
import * as colors from '@config/colors';

import {ContentItem} from './types'

export default function CommunityItem({imageSrc, title, postAuthor,postingDate, commentNum}: ContentItem) {

  return (
    <View >
      <TouchableOpacity style={styles.listItem} activeOpacity={0.8} >
          <Image style={styles.thumnailImage} source={{uri: imageSrc}}/>
          <View style={styles.contentInfo}>
            <Text>{title}</Text>
            <View style={styles.flexBox}>
              <Text>{postAuthor}</Text>
                  <Entypo name='dot-single' size={14} color={colors.BlackText}/>
              <Text>{postingDate}</Text>
            </View>
          </View>
      </TouchableOpacity>
      <View style= {styles.iconBox}>
        <CommentNum commentNum={commentNum}/>
        <Heart/>
      </View>
    </View>
  )
}

// comment 갯수
const CommentNum = ({commentNum}) => {
  return (
    <View style={styles.commentAndLike} >
      <MaterialIcons name='comment' size={14} color={colors.Gray2}/>
      <Text style={{color:colors.Gray2}}>{commentNum}</Text>
    </View>
  )
}

// 게시물 좋아요 갯수
const Heart = () => {
  const [heart, setHeart] = useState(false)

  return (
    <Pressable onPress={() => setHeart(!heart)} style={styles.commentAndLike} >
      <FontAwesome 
        name='heart' 
        size={14} 
        color={heart? colors.Selected : colors.Gray2}
      />
      <Text style={{color:colors.Gray2}}>5</Text>
    </Pressable>
  )
}