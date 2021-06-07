import React, { ReactElement, Suspense, useEffect, useRef} from 'react';
import { Text,ScrollView } from 'react-native';

import {CommunityList} from '@components/CommunityMain'
import { useScrollToTop } from '@react-navigation/native';


export default function CommunityMain({data}):ReactElement  {
  // focus 되어있는 tab click 하면 맨위로 이동
  const listRef= useRef(null)
  useScrollToTop(listRef)
  
  return (
    <>
        {/* 커뮤니티 글 리스트 */}
        <ScrollView ref= {listRef}>
          <Suspense fallback={<Text>Loading...</Text>}>
            <CommunityList data={data}/>
          </Suspense>
        </ScrollView>
    </>
  );
};
