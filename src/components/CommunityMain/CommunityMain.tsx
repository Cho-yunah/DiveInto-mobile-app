import React, { ReactElement, Suspense, useCallback, useEffect, useRef, useState} from 'react';
import { Text, View,FlatList } from 'react-native';

import { useScrollToTop } from '@react-navigation/native';
import axios, { AxiosResponse } from 'axios';
import { ContentItem } from './types';
import CommunityItem from './CommunityItem';
import {styles} from './styles'


export default function CommunityMain():ReactElement  {
  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef= useRef(null)
  useScrollToTop(listRef)

  // list data 받아오기
  // const [shouldFetch, setShouldFetch] = useState(true);
  const [contentItems, setContentItems] = useState<ContentItem[]>([])
  const [page, setPage] = useState<number>(1)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  console.log(page)
  
  const URL = 'http://localhost:3000/shared?_limit=9&_page=1'

  const getCommunityList = async() => {
    const response = await axios.get(URL)
      .then((res: AxiosResponse) => setContentItems ([...contentItems, ...res.data]))
      .then(()=> setPage(page+1))
      .catch(e => console.error(e))
    return response;
  }

  useEffect(()=> {
     getCommunityList()
  }, [])

  const contentsLoadMore= useCallback(() =>  getCommunityList(),[])

  const onRefresh = async() => {
    
  }
  
  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
          <FlatList 
            ref={listRef}
            data={contentItems} // 렌더링을 할 아이템
            keyExtractor={(item, id)=> id.toString()}
            onEndReached={contentsLoadMore}
            // onEndReachedThreshold={0.5}
            refreshing={refreshing}
            onRefresh={onRefresh}
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
