import axios ,{AxiosResponse} from 'axios';
import React from 'react';
import { useState } from 'react';
import {selectorFamily, useRecoilValue} from 'recoil'
import { FlatList } from 'react-native';
import {CommunityItem} from '@components/CommunityMain'
import { Text, View } from 'react-native-animatable';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export type ContentItem = {
  title: string;
  postAuthor: string;
  postingDate: string;
  imageSrc: string;
}


export default function CommunityList({onPress}: { onPress: () => void }) {
  const [contentItem, setContentItem] = useState<ContentItem[]>([])
    // const listItem = useRecoilValue(getCommunityList)
    // const URL = `http://localhost:3001/contentItem?_limit=10`;

    // const getCommunityList = selectorFamily({
    //   key: 'communityList',
    //   get: (page: string) => async() => {
    //     const response = await axios.get(URL)
    //       .then((res: AxiosResponse) => setContentItem (res.data))
    //       .catch(e => console.error(e))
    //     return response.data;
    //   }
    // })

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
        <CommunityItem title={'title'}
               postAuthor={'postAuthor'}
               postingDate={'postingDate'}
               imageSrc={'imageSrc'} 
               />
        <CommunityItem title={'title'}
               postAuthor={'postAuthor'}
               postingDate={'postingDate'}
               imageSrc={'imageSrc'} 
               />
        </TouchableOpacity>
      </View>
      // API 나오면 아래의 flatlist로 렌더링
      // <FlatList
      //     data={contentItem} // 렌더링을 할 아이템
      //     onEndReachedThreshold={0.5}
      //     renderItem={({item}) => (
      //       <CommunityItem 
      //         title={item.title}
      //         postAuthor={item.postAuthor}
      //         postingDate={item.postingDate}
      //         imageSrc={item.imageSrc}
      //       />
      //     )}
      //   />
    )
  }
