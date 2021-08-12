import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import { CommunityLikeProps } from './types';
import { getInstanceATK } from '@lib/api/axios';
import { CommunityItem } from '@components/CommunityMain';
import { atkState } from '@recoil/ProfileStack';
import CommonEmptyView from '@components/common/CommonEmptyView';

export default function CommunityLikeScreen() {
  const atk = useRecoilValue(atkState);
  const [communityList, setCommunityList] = useState([]);

  useEffect(() => {
    const getLikeCommunity = async () => {
      const instanceAtk = await getInstanceATK();

      try {
        const res = await instanceAtk.get(
          '/community/post/like?page=0&size=10',
        );

        if (res.data._embedded) {
          setCommunityList(res.data._embedded.postsModelList);
          console.log(res.data._embedded.postsModelList);
        } else {
          setCommunityList([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getLikeCommunity();
  }, [atk]);

  return (
    <View style={styles.eachContainer}>
      {communityList &&
        (communityList.length !== 0 ? (
          <FlatList
            data={communityList}
            renderItem={({ item }: { item: CommunityLikeProps }) => {
              const date = item.dateOfRegistration.split('T')[0];

              return (
                <CommunityItem
                  id={item.id}
                  title={item.title}
                  dateOfRegistration={date}
                  writerNickname={item.writerNickname}
                  imageUrl={item.imageUrl}
                  commentCount={item.commentCount}
                  likeCount={item.likeCount}
                  liked={item.liked}
                  listType="profileList"
                />
              );
            }}
            keyExtractor={item => String(item.id)}
          />
        ) : (
          <CommonEmptyView
            guideText="커뮤니티 글이 없습니다."
            buttonText="커뮤니티 글 둘러보기"
            moveViewName="커뮤니티"
          />
        ))}
    </View>
  );
}
