import React, { ReactElement, useRef, useState} from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import CommunityItem from './CommunityItem';
import { styles } from './styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRequestCommunityList } from './useRequestCommunityList';
import { ContentItem, CommunityTabType, ContentItemType  } from './types';
import {
  shareListState,
  shareListPageState,
  refreshShareState,
  questionListState,
  questionListPageState,
  refreshQuestionState,
  shareLoadingState,
  questionLoadingState,
} from '@recoil/CommunityStack';
import { useRequestCommunityList } from './useRequestCommunityList';

export default function CommunityMain({share, question}: CommunityTabType):ReactElement  {
  // data 요청
  share? 
    useRequestCommunityList({requestPage: 'SHARE'})
    : useRequestCommunityList({requestPage: 'QUESTION'})
  
  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef= useRef(null)
  useScrollToTop(listRef)
  
  // props로 share이 전달될 경우
  const shareList= useRecoilValue<ContentItemType[]>(shareListState)
  const [sharePage, setSharePage] = useRecoilState<number>(shareListPageState) 
  const [refreshShare, setRefreshShare] = useRecoilState<boolean>(refreshShareState)

  // props로 question이 전달될 경우
  const questionList = useRecoilValue<ContentItemType[]>(questionListState)
  const [questionPage, setQuestionPage] = useRecoilState<number>(questionListPageState)
  const [refreshQuestion, setRefreshQuestion] = useRecoilState<boolean>(refreshQuestionState)

  const isShareLoading = useRecoilValue<boolean>(shareLoadingState);
  const isQuestionLoading = useRecoilValue<boolean>(questionLoadingState);
  const [callOnScrollEnd, setCallOnScrollEnd] = useState(false)
  
  // console.log('share',shareList)
  // console.log('question',questionList)


  // data 받아올 때의 loader
  const renderLoader = () => {
    return isShareLoading || isQuestionLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#50CAD2" />
      </View>
    ) : null;
  };

  // contents 더 가져오기
  const contentsLoadMore= ()=> { 
    if(isShareLoading && refreshShare ) return
    if(isQuestionLoading && refreshQuestion) return 
    share? 
      setSharePage(sharePage +1 ) 
      : setQuestionPage(questionPage + 1)
  }

  // 새로고침
  const onFresh = () => {
    // page에 따라 의존성을 다르게 하여 리스트 요청을 한다.
    share && sharePage === 0 
      ? setRefreshShare(true) : setSharePage(0)
    question && questionPage === 0 
      ? setRefreshQuestion(true) : setQuestionPage(0)
  }

  const renderItem = ({item})=> (
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
    );
    
    return (
      <View style={styles.container}>    
            <FlatList 
              ref={listRef}
              data={share? shareList: questionList} // 렌더링데이터
              renderItem={renderItem}
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
              refreshing={share ? refreshShare : refreshQuestion } //새로고침 props
              onRefresh={onFresh}
              windowSize={2}
              disableVirtualization={false} // virtualized 어쩌구 에러 없애줌
              initialNumToRender={9} 
            />
      </View>
    );
}
