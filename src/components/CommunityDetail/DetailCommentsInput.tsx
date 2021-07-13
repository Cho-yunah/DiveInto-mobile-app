import React, { useState } from 'react'
import {TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CommentInputStyle as styles} from './styles'

export default function DetailCommentsInput() {
  const [comments, setComments] = useState('')

  return (
    <>
      <TextInput 
        placeholder='댓글을 입력하세요' 
        style={styles.CommentInputBox}
        onChangeText={text => setComments(text)}
        multiline
        value={comments}
      />
      {comments? 
        <AntDesign name='arrowright' style={styles.activeArrowIcon}/>  
        : <AntDesign  name='arrowright' style={styles.arrowIcon}/> }
    </>
  )}