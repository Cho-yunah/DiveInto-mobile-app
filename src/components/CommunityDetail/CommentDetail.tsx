import { commentState } from '@/src/recoil/CommunityStack';
import React from 'react';
import { View, Text, Image} from 'react-native';
import { useRecoilValue } from 'recoil';
import {CommentDetailStyles as styles} from './styles'

export default function CommentDetail() {
  const commentInfo = useRecoilValue(commentState)
  console.log(commentInfo)
  return (
    <View style={styles.commentBox}>
      <View style={styles.commentWriterInfo}>
        <Image style={styles.image} source={{uri: '#'}}/>
        <Text style={styles.nicknameStyle}>{commentInfo.id}</Text>
       </View>
        <Text style= {styles.dateStyle}>{commentInfo.dateOfWriting}</Text>
        <Text style= {styles.comment}>{commentInfo.content}</Text>
    </View>
  )
}