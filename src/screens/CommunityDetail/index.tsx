import React, { ReactElement, useLayoutEffect } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import {
  DetailInfo,
  DetailContents,
  CommentsInput,
  CommentDetail,
} from '@components/CommunityDetail';
import { useRequestCommunityItem } from '@components/CommunityDetail/useRequestCommunityItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { communityItemSelector, likeState } from '@/src/recoil/CommunityStack';
import { LikeBtn } from '@components/CommunityMain/LikeBtn';
import useToggleLike from '@/src/lib/hooks/useToggleLike';

export default function CommunityDetailScreen({
  route,
  navigation,
}: CommunityDetailProps): ReactElement {
  const { id } = route.params;
  useRequestCommunityItem(id);

  const { content, liked, likeCount } = useRecoilValue(communityItemSelector);
  const { Clickedlike } = useToggleLike(id);

  // 헤더에 좋아요 하트 버튼
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={Clickedlike}>
          <LikeBtn id={id} liked={liked} likeCount={likeCount} />
        </TouchableOpacity>
      ),
    });
  }, [id, liked, likeCount, Clickedlike]);

  return (
    <View style={styles.container}>
      <DetailInfo id={id} />
      <ScrollView>
        <DetailContents content={content} />
        <CommentDetail id={id} />
      </ScrollView>
      <CommentsInput id={id} />
    </View>
  );
}
