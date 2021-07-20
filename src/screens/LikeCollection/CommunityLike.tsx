import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { CommunityLikeProps } from './types';
import instance from '@lib/api/axios';
import { CommunityItem } from '@components/CommunityMain';
import { atkState } from '@recoil/ProfileStack';

export default function CommunityLikeScreen() {
  const navigation = useNavigation();
  const atk = useRecoilValue(atkState);
  const [communityList, setCommunityList] = useState([]);

  const moveDetailView = () => navigation.navigate('CommunityDetail');

  useEffect(() => {
    const getLikeCommunity = async () => {
      try {
        const res = await instance.get('/community/post/like?page=0&size=1', {
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
    <View style={styles.eachContainer}>
      {communityList && (
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
                onItemClick={moveDetailView}
              />
            );
          }}
          keyExtractor={item => String(item.id)}
        />
      )}
    </View>
  );
}
