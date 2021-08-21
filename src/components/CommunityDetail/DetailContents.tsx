import React from 'react'
import { View , Text, Image, FlatList} from 'react-native'
import { useRecoilValue } from 'recoil'
import {ContentsStyle as styles} from './styles'
import { ImageState } from '@recoil/CommunityStack'

type ImageType = {
  id: number,
  imageUrl: string
}

export default function DetailContents({content} : {content: string}) {

  const imageArr = useRecoilValue<ImageType[]> (ImageState)
  console.log(imageArr)

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
            keyExtractor={(item=> `communityImg${item.id}`)}
            renderItem= {({item})=> (
              <Image 
                style={styles.contentsImage} 
                source={{uri: item.imageUrl}} />
            )}
            nestedScrollEnabled={true}
          />
      </View>
      ): <View></View>}     
    </View>
  )
}