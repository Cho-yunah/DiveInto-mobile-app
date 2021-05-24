import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import ComunityItem from './CommunityItem';
import axios, {AxiosResponse} from 'axios';

export type ContentItem = {
  title: string;
  postAuthor: string;
  postingDate: string;
  imageSrc: string;
}

export default function CommunityList() {
  const [contentItem, setContentItem] = useState<ContentItem[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(true);

  // 데이터 받아오기
  // const getData= async()=> {
  //   await axios.get<ContentItem[]>
  //   ('http://localhost:3001/contentItem?_limit=10') // data를 잘 받아오는지 test
  //              .then((res: AxiosResponse) => setContentItem (res.data))
  //              .catch(e => console.error(e))
  //             // .finally(setLoading(false))
  // }
  // useEffect(() => {
  //   getData();
  // }, []);

  const getDataMore=() => {
  }

  const imageSrc = '#';

  return (
    <>
      <View style={styles.container}>
          {/* <TouchableOpacity activeOpacity={0.7} style={styles.writingBtn}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>글쓰기</Text>
          </TouchableOpacity> */}
        <View style={styles.tabContainer}>
          <Text style={styles.tab}>공유해요</Text>
          <Text style={styles.tab}>궁금해요</Text>
        </View>
        {/* Render 되는 item이 들어올 자리 */}
        <ComunityItem 
              title={'title'}
              postAuthor={'postAuthor'}
              postingDate={'postingDate'}
              imageSrc={'imageSrc'} 
            />
        <ComunityItem 
              title={'title'}
              postAuthor={'postAuthor'}
              postingDate={'postingDate'}
              imageSrc={'imageSrc'} 
            />

        {/* <FlatList
          data={contentItem} // 렌더링을 할 아이템
          onEndReached = {getDataMore} // 
          onEndReachedThreshold={0.5}
          renderItem={({item}) => (
            <ComunityItem 
              title={item.title}
              postAuthor={item.postAuthor}
              postingDate={item.postingDate}
              imageSrc={item.imageSrc}
            />
          )}
        /> */}
      </View>
    </>
  );
}
