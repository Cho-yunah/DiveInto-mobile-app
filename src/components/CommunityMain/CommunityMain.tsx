import React, { ReactElement, Suspense, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';

import { useScrollToTop } from '@react-navigation/native';
import axios, { AxiosResponse } from 'axios';
import { ContentItem } from './types';
import CommunityItem from './CommunityItem';
import {styles} from './styles'


export default function CommunityMain(navigation):ReactElement  {
  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef= useRef(null)
  useScrollToTop(listRef)

  // list data 받아오기
  const [isLoading, setIsLoading] = useState(false);
  const [contentItems, setContentItems] = useState<ContentItem[]>([])
  const [page, setPage] = useState<number>(1)  
  const [refreshing, setRefreshing] = useState(false)

  const URL = `http://localhost:3000/shared?limit=10&page=${page}`

  const getCommunityList = async() => {
    if(isLoading) return;
      setIsLoading(true)
      const response = await axios.get(URL)
      .then((res: AxiosResponse) => setContentItems ([...contentItems, ...res.data]))
      .then(()=> {setIsLoading(false), setRefreshing(false)})  
      .catch(e => console.error(e))
      return response; 
  }
  console.log('current page: ', page)

  // data 받아오기
  useEffect(()=> {
    getCommunityList()
 }, [])

  // contents 더 가져오기
  const contentsLoadMore= ()=> { setPage(page+1)}

 // data 받아올 때의 loader
 const renderLoader =() => {
    return (
      isLoading? 
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#50CAD2" />
      </View> : null
    )
 }
  // 새로고침
  const onFresh = () => {
    console.log('fresh!')
    setRefreshing(true)
    setPage(1)
    setContentItems([])
    getCommunityList()
  }
 
  // const handleItemClick=()=> { navigation.navigate('CommunityDetail') }

  // render하는 Item
  const renderCommunityItem= useCallback(
    ({item})=> {
      return (
        <CommunityItem
          id={item.id}
          title={item.title}
          postAuthor={item.postAuthor}
          postingDate={item.postingDate}
          imageSrc={item.imageSrc}
          commentNum={item.commentNum}
          // navigation={item.navigation}
          // onItemClick={handleItemClick}
        />
      )
    }, []
  )
  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
          <FlatList 
            ref={listRef}
            renderItem={renderCommunityItem}
            data={contentItems} // 렌더링을 할 아이템
            keyExtractor={(item, index) => index.toString()}            
            onEndReached={contentsLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={renderLoader} // footer에 도달했을때 로딩 표시
            refreshing={refreshing} //새로고침 props
            onRefresh={onFresh}
            extraData={contentItems}
            windowSize={2}
            maxToRenderPerBatch={8}
          />
      </Suspense>
    </View>
  );
};
