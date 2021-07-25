import { ImageState } from '@/src/recoil/CommunityStack'
import React from 'react'
import { View , Text, Image, FlatList} from 'react-native'
import { useRecoilValue } from 'recoil'
import {ContentsStyle as styles} from './styles'

export default function DetailContents({content} : any) {
  const imageArr = useRecoilValue (ImageState)

  const ImageItem =({item, index}: any) => {
    return (
        <Image style={styles.contentsImage} source={{uri: item.imageUrl}} ></Image>
    )
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
            renderItem= {({item, index})=> {
              return <ImageItem item={item} index={index}/>
            }}
            nestedScrollEnabled={true}
          />
      </View>
      ): <View></View>}     
    </View>
  )
}