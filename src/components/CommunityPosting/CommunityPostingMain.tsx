import React from 'react'
import { View } from 'react-native'

import {styles} from './styles'

import SelectCategory from './SelectCategory'
import SelectTag from './SelectTag'
import TitleAndContents from './TitleAndContents'
import AddImages from './AddImage'

export default function CommunityPostingMain() {
  return (
    <View style={styles.container}>
      <SelectCategory/>
      <SelectTag/>
      <TitleAndContents/>
      <AddImages/>
    </View>
  )
}