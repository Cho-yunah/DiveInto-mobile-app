import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import { CommunityLikeItemType } from './types';
import { CommunityItem } from '@components/CommunityMain';
import { requestLikeListSelector } from '@recoil/ProfileStack';
import CommonEmptyView from '@components/common/CommonEmptyView';

export default function CommunityLike() {
  const communityLikeList = useRecoilValue(
    requestLikeListSelector('community'),
  );

  if (communityLikeList.length === 0) {
    return (
      <View style={styles.eachContainer}>
        <CommonEmptyView
          guideText="커뮤니티 글이 없습니다."
          buttonText="커뮤니티 글 둘러보기"
          moveViewName="커뮤니티"
        />
      </View>
    );
  }

  return (
    <View style={styles.eachContainer}>
      <FlatList
        data={communityLikeList}
        renderItem={({ item }: { item: CommunityLikeItemType }) => {
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
    </View>
  );
}
