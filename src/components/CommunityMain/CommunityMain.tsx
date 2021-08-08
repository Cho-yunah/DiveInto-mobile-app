import React, { ReactElement, useMemo, useRef, useState} from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import CommunityItem from './CommunityItem';
import {styles} from './styles'
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRequestCommunityList} from './useRequestCommunityList';
import {loadingState, listPageState, refreshState, communityListState} from '@/src/recoil/CommunityStack'
import { ContentItem } from './types';

export default function CommunityMain({share, question}: any):ReactElement  {
  // data 요청
  share? 
    useRequestCommunityList({requestPage: share})
    : useRequestCommunityList({requestPage: question})
  
  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef= useRef(null)
  useScrollToTop(listRef)
  
  const [list, setList]= useRecoilState<ContentItem[]>(communityListState)
  const isLoading = useRecoilValue<boolean>(loadingState);
  const [currentPage, setCurrentPage] = useRecoilState<number>(listPageState) 
  const [refreshing, setRefreshing] = useRecoilState(refreshState)
  const [callOnScrollEnd, setCallOnScrollEnd] = useState(false)
  
  // console.log('communityList-main',list)
  // console.log('mainpage', currentPage)

  // data 받아올 때의 loader
  const renderLoader =() => {
    return (
      (isLoading===true)
        ? <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#50CAD2" />
        </View> : null
    )
  }

  // contents 더 가져오기
  const contentsLoadMore= ()=> { 
    if(isLoading && refreshing ) return
    setCurrentPage(currentPage +1 ) 
  }

  // 새로고침
  const onFresh = () => {
    currentPage === 0 // page에 따라 의존성을 다르게 하여 리스트 요청을 한다.
      ? setRefreshing(true) 
      : setCurrentPage(0)
  }

  const renerItem = useMemo(() => ({item})=> (
      <CommunityItem
        id={item.id}
        title={item.title}
        category={item.category}
        writerNickname={item.writerNickname}
        dateOfRegistration={item.dateOfRegistration}
        imageUrl={item.imageUrl}
        commentCount={item.commentCount}
        likeCount={item.likeCount}
        liked={item.liked}
      />
    )
  ,[]) 

  return (
    <View style={styles.container}>
      {/* <Suspense fallback={<Text>Loading...</Text>}> */}
          <FlatList 
            ref={listRef}
            data={list} // 렌더링데이터
            renderItem={renerItem}
            keyExtractor={
              share 
              ? (item, index) => `share${item.id}`
              : (item, index) => `question${item.id}`
            }
            onEndReachedThreshold={0}
            onEndReached={() => setCallOnScrollEnd(true)}
            onMomentumScrollEnd={() => {
              callOnScrollEnd && contentsLoadMore()
              setCallOnScrollEnd(false)
            }}
            ListFooterComponent={renderLoader} // footer 도달시 로더
            refreshing={refreshing} //새로고침 props
            onRefresh={onFresh}
            extraData={list} // communityList가 바뀌면 리렌더
            windowSize={2}
            disableVirtualization={false} // virtualized 어쩌구 에러 없애줌
            // initialNumToRender={1} 
            removeClippedSubviews={true}
          />
      {/* </Suspense> */}
    </View>
  )
};
