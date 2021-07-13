import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { CommunityLikeProps } from './types';
import instance from '@lib/api/axios';
import { CommunityItem } from '@components/CommunityMain';
import { atkState } from '@recoil/ProfileStack';

export default function CommunityLikeScreen() {
  const atk = useRecoilValue(atkState);
  const [communityList, setCommunityList] = useState([]);

  useEffect(() => {
    const getLikeCommunity = async () => {
      try {
        const res = await instance.get('/community/post/like?page=0&size=5', {
          headers: {
            Authorization: atk,
          },
        });

        setCommunityList(res.data._embedded.postsModelList);
      } catch (err) {
        console.log(err);
      }
    };

    getLikeCommunity();
  }, [atk]);

  return (
    <View>
      {communityList && (
        <FlatList
          data={communityList}
          renderItem={({ item }: { item: CommunityLikeProps }) => {
            const date = item.dateOfRegistration.split('T')[0];

            return (
              <CommunityItem
                id={item.id}
                imageSrc={item.imageUrl}
                title={item.title}
                postAuthor={item.writerNickname}
                postingDate={date}
                commentNum={item.commentCount}
              />
            );
          }}
          keyExtractor={item => String(item.id)}
        />
      )}
    </View>
  );
}
