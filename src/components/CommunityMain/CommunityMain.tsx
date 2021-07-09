import React, { ReactElement, Suspense, useRef} from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import CommunityItem from './CommunityItem';
import {styles} from './styles'
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRequestCommunityList} from './useRequestCommunityList';
import {loadingState, listPageState, refreshState, communityListState} from '@/src/recoil/CommunityStack'

export default function CommunityMain({onItemClick}: any):ReactElement  {

  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef= useRef(null)
  useScrollToTop(listRef)
  
  // data 받아오기
  const communityList =useRequestCommunityList()
  const isLoading = useRecoilValue<boolean>(loadingState);
  const [page, setPage] = useRecoilState<number>(listPageState)  
  const [refreshing, setRefreshing] = useRecoilState(refreshState)
  const list =useRecoilValue(communityListState)

  // data 받아올 때의 loader
  const renderLoader =() => {
    return (
      (isLoading===true)? 
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#50CAD2" />
      </View> : null
    )
  }

  // contents 더 가져오기
  const contentsLoadMore= ()=> { 
    if(isLoading) return
    setPage(page+1)
   
  }
  // 새로고침
  const onFresh = () => {
    console.log('fresh!')
    setRefreshing(true)
    setPage(0)
    // useRequestCommunityList()
  }

  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
          <FlatList 
            ref={listRef}
            renderItem={({item})=> (
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
                  onItemClick={onItemClick}
                />
             )}
            data={communityList} // 렌더링데이터
            keyExtractor={(item, index) => item.id.toString()}
            onEndReached={contentsLoadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={renderLoader} // footer에 도달하면 로딩 표시
            refreshing={refreshing} //새로고침 props
            onRefresh={onFresh}
            extraData={communityList} // communityList가 바뀌면 리렌더
            windowSize={2}
            maxToRenderPerBatch={8}
          />
      </Suspense>
    </View>
  );
};
