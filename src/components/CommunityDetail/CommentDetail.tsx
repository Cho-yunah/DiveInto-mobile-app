import { commentItemType, commentState } from '@/src/recoil/CommunityStack';
import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, Image} from 'react-native';
import { useRecoilValue } from 'recoil';
import {CommentDetailStyles as styles} from './styles'

export default function CommentDetail() {
  const commentList = useRecoilValue(commentState)
  // console.log(commentList)

  const CommentsDetailItem =({ nickName, profileUrl, dateOfWriting, content }: commentItemType)=> {
    return (
      <View style={styles.commentBox}>
        <View style={styles.commentWriterInfo}>
          <Image style={styles.image} source={{uri:profileUrl}}/>
          <Text style={styles.nicknameStyle}> {nickName} </Text>
        </View>
        <Text style= {styles.dateStyle}>{dateOfWriting}</Text>
        <Text style= {styles.comment}>{content}</Text>
      </View>
    )
  }

  return (
    <View >
    {commentList
    ? (
      <FlatList
        data= {commentList}
        keyExtractor={(item)=> `${item.accountModel.id}${item.accountModel.nickName}`}
        nestedScrollEnabled={true}
        renderItem={({item}) => (
          <CommentsDetailItem
            nickName= {item.accountModel.nickName}
            profileUrl={item.accountModel.profileImageUrl}
            dateOfWriting={item.commentModel.dateOfWriting}
            content={item.commentModel.content}
          />
        )}
      />
    )
    : (<View></View>)}
    </View>
  )
}