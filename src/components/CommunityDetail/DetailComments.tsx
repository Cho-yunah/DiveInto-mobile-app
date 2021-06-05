import React from 'react'
import {View,TextInput, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles'

export default function DetailComments() {
  return (
    <>
      <TextInput placeholder
      ='댓글을 입력하세요' style={styles.CommentInputBox}>
      </TextInput>
      <AntDesign
          name='arrowright'
          size={24}
          style={styles.arrowIcon}
        />
    </>
  )
}