import React from 'react';
import { View, Text, Image} from 'react-native';
import {CommentDetailStyles as styles} from './styles'

export default function CommentDetail() {
  return (
    <View style={styles.commentBox}>
      <View style={styles.commentWriterInfo}>
        <Image style={styles.image} source={{uri: '#'}}/>
        <Text style={styles.nicknameStyle}>Nickname</Text>
       </View>
        <Text style= {styles.dateStyle}>date</Text>
        <Text style= {styles.comment}>댓글 입력했다!!</Text>
      
    </View>
  )
}