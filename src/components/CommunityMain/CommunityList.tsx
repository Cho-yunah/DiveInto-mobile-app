import axios ,{AxiosResponse} from 'axios';
import React, { createRef, useEffect, useRef, useState } from 'react';
import {selectorFamily, useRecoilValue} from 'recoil'
import { View , FlatList , TouchableOpacity, ScrollView} from 'react-native';

import {CommunityItem} from '@components/CommunityMain'

import { styles } from './styles';
import {ContentItem} from './types'


export default function CommunityList(data) {
  const {item}= data;
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
      <View style={styles.container} >
        <TouchableOpacity >
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={2}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        <CommunityItem title='title'
               postAuthor='postAuthor'
               postingDate='postingDate'
               imageSrc='imageSrc'
               commentNum={4}
               />
        </TouchableOpacity>
      </View>
      // API 나오면 아래의 flatlist로 렌더링
      // <FlatList
      //     keyExtractor={item => item.id.toString()}
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