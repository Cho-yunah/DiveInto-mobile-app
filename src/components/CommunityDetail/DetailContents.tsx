import { ImageState } from '@/src/recoil/CommunityStack'
import React from 'react'
import { View , Text, ScrollView, Image, FlatList} from 'react-native'
import { useRecoilValue } from 'recoil'
import {ContentsStyle as styles} from './styles'

export default function DetailContents({content} : any) {
  const imageArr = useRecoilValue (ImageState)
  console.log(imageArr)

  const ImageItem =({item, index}: any) => {
    return (
      <View>
        <Image style={styles.contentsImage} source={{uri: item.imageUrl}} ></Image>
      </View>
    )
  }

  return (
    <View style= {styles.contentsContainer}>
      <Text style={styles.textStyle}>
       {content}
      </Text>
      <View style={styles.imageBox}>
          <FlatList
            data={imageArr}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem= {({item, index})=> {
              return <ImageItem item={item} index={index}/>
            }}
          />
        </View>
    </View>
  )
}