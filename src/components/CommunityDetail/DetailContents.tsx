import React from 'react'
import { View , Text, Image, FlatList} from 'react-native'
import { useRecoilValue } from 'recoil'
import {ContentsStyle as styles} from './styles'
import { ImageState } from '@recoil/CommunityStack'

export default function DetailContents({content} : any) {
  const imageArr = useRecoilValue (ImageState)

  const ImageItem =({item}: any) => {
    return <Image 
              style={styles.contentsImage} 
              source={{uri: item.imageUrl}} />
  }

  return (
    <View style= {styles.contentsContainer}>
      <Text style={styles.textStyle}>
       {content}
      </Text>
      {imageArr ? (
        <View style={styles.imageBox}>
          <FlatList
            data={imageArr}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            disableVirtualization={false} 
            renderItem= {({item, index})=> {
              return <ImageItem item={item} />
            }}
            nestedScrollEnabled={true}
          />
      </View>
      ): <View></View>}     
    </View>
  )
}