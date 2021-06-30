import React, { useState } from 'react'
import {TextInput, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
// import InputScrollView from 'react-native-input-scroll-view';
import {CommnetInputStyle as styles} from './styles'

export default function DetailCommentsInput() {
  const [comments, setComments] = useState({text: 'haha'})

  return (
    <View style={styles.Container}>
      <TextInput 
        placeholder='댓글을 입력하세요' 
        style={styles.CommentInputBox}
        onChangeText={text => setComments({text})}
        multiline
      />
      <AntDesign
          name='arrowright'
          style={styles.arrowIcon}
        />
    </View>
  )
}