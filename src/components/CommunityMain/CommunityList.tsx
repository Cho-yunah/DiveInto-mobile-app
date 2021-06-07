// import axios ,{AxiosResponse} from 'axios';
// import React, { createRef, useEffect, useRef, useState } from 'react';
// import {selector, selectorFamily, useRecoilValue} from 'recoil'
// import { View , FlatList , TouchableOpacity, ScrollView} from 'react-native';

// import {CommunityItem} from '@components/CommunityMain'

// import { styles } from './styles';
// import {ContentItem} from './types'


// export default function CommunityList() {
  
//   const [contentItem, setContentItem] = useState<ContentItem[]>([])
  
  
//   const URL = `http://localhost:3000/shared?_limit=10`;

//   const getCommunityList = selector({
//       key: 'communityList/shared',
//       get: async() => {
//         const response = await axios.get(URL)
//           .then((res: AxiosResponse) => setContentItem (res.data))
//           .catch(e => console.error(e))
//         return response;
//       }
//     })
//     const listItem = useRecoilValue(getCommunityList)
//     console.log(listItem)


// //     return (
// //       <View style={styles.container} >
// //         <TouchableOpacity >
// //         <CommunityItem title='title'
// //                postAuthor='postAuthor'
// //                postingDate='postingDate'
// //                imageSrc='imageSrc'
// //                commentNum={4}
// //                />
// //         <CommunityItem title='title'
// //                postAuthor='postAuthor'
// //                postingDate='postingDate'
// //                imageSrc='imageSrc'
// //                commentNum={4}
// //                />
// //         </TouchableOpacity>
// //       </View>

//       // API 나오면 아래의 flatlist로 렌더링
//       return (

//              <FlatList
//                  data={contentItem} // 렌더링을 할 아이템
//                  onEndReachedThreshold={0.5}
//                  renderItem={({item}) => (
//                    <CommunityItem 
//                      title={item.title}
//                      postAuthor={item.postAuthor}
//                      postingDate={item.postingDate}
//                      imageSrc={item.imageSrc}
//                      commentNum={4}
//                    />
//                  )}
//                />
//       )
// //     )
//   }