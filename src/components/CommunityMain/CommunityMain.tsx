import React, { ReactElement, Suspense, useEffect, useRef, useState} from 'react';
import { Text, View } from 'react-native';

import { useScrollToTop } from '@react-navigation/native';
import axios, { AxiosResponse } from 'axios';
import { ContentItem } from './types';
import CommunityItem from './CommunityItem';
import { FlatList } from 'react-native-gesture-handler';
import {styles} from './styles'


export default function CommunityMain():ReactElement  {
  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef= useRef(null)
  useScrollToTop(listRef)

  // list data 받아오기
  const URL = 'http://localhost:3000/shared';

  const [contentItem, setContentItem] = useState<ContentItem[]>([])
  const getCommunityList = async() => {
    const response = await axios.get(URL)
      .then((res: AxiosResponse) => setContentItem (res.data))
      .catch(e => console.error(e))
    return response;
  }

  useEffect(()=> {
    getCommunityList()
  }, [])
  
  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
          <FlatList 
            ref={listRef}
            data={contentItem} // 렌더링을 할 아이템
            renderItem={({item}) => (
              <CommunityItem
                title={item.title}
                postAuthor={item.postAuthor}
                postingDate={item.postingDate}
                imageSrc={item.imageSrc}
                commentNum={item.commentNum}
              />
            )}
          />
      </Suspense>
    </View>
  );
};
