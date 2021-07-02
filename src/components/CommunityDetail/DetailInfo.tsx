import React from 'react'
import {View } from 'react-native'
import EditButton from './EditButton'
import WriterInfo from './WriterInfo'

import {DetailInfoStyle as styles} from './styles'

export default function DetialInfo() {
  return (
    <View >
      <WriterInfo/>
       <View style= {styles.buttons}>
          <EditButton text={'수정'} style={styles.modify} onPress={''}/>
          <EditButton text={'삭제'} style={styles.delete} onPress={''}/>
       </View>
    </View>
  )
}