import React from 'react'
import { View } from 'react-native'
import DetailComments from './DetailComments'
import DetailContents from './DetailContents'
import  DetailInfo  from './DetailInfo'

import {styles} from './styles'

export default function CommunityDetailMain() {
  return (
    <View style={styles.mainContainer}>
     <DetailInfo/>
     <DetailContents/>
     <DetailComments/>
    </View>
  )
}


