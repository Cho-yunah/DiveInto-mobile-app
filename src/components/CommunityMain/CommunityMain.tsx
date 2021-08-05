import React, { ReactElement, Suspense, useRef, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import CommunityItem from './CommunityItem';
import { styles } from './styles';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useRequestCommunityList } from './useRequestCommunityList';
import {
  loadingState,
  listPageState,
  refreshState,
  communityListState,
} from '@/src/recoil/CommunityStack';

export default function CommunityMain({ share }: any): ReactElement {
  // data 요청
  useRequestCommunityList({ share });

  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef = useRef(null);
  useScrollToTop(listRef);

  const list = useRecoilValue(communityListState);
  const isLoading = useRecoilValue<boolean>(loadingState);
  const [currentPage, setCurrentPage] = useRecoilState<number>(listPageState);
  const [refreshing, setRefreshing] = useRecoilState(refreshState);
  const [callOnScrollEnd, setCallOnScrollEnd] = useState(false);

  // data 받아올 때의 loader
  const renderLoader = () => {
    return isLoading === true ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#50CAD2" />
      </View>
    ) : null;
  };

  // contents 더 가져오기
  const contentsLoadMore = () => {
    if (isLoading && refreshing) return;
    setCurrentPage(currentPage + 1);
  };

  // 새로고침
  const onFresh = () => {
    console.log('fresh!');
    setRefreshing(true);
    setCurrentPage(0);
    setRefreshing(false);
  };
  // console.log('mainpage', list)

  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <FlatList
          ref={listRef}
          data={list} // 렌더링데이터
          renderItem={({ item }) => (
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
              type="community"
            />
          )}
          keyExtractor={
            share
              ? (item, index) => `share${item.id}`
              : (item, index) => `question${item.id}`
          }
          onEndReachedThreshold={0}
          onEndReached={() => setCallOnScrollEnd(true)}
          onMomentumScrollEnd={() => {
            callOnScrollEnd && contentsLoadMore();
            setCallOnScrollEnd(false);
          }}
          ListFooterComponent={renderLoader} // footer 도달시 로더
          refreshing={refreshing} //새로고침 props
          onRefresh={onFresh}
          extraData={list} // communityList가 바뀌면 리렌더
          windowSize={2}
          maxToRenderPerBatch={8}
        />
      </Suspense>
    </View>
  );
}
