import React, { useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { likeBtnPropsType } from '@/src/recoil/CommunityStack';
import { likeState } from '@recoil/CommunityStack';
import { useRecoilValue } from 'recoil';
import { styles } from './styles';
import * as colors from '@config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// 좋아요 버튼
export const LikeBtn = ({
  id,
  likeCount,
  liked,
  listType,
}: likeBtnPropsType) => {
  const like = useRecoilValue(likeState(id));

  const likeCountNumber = liked
    ? like
      ? likeCount
      : likeCount - 1
    : like
    ? likeCount + 1
    : likeCount === 0
    ? 0
    : likeCount;

  return (
    <View style={styles.commentAndLike}>
      <FontAwesome
        name="heart"
        size={14}
        color={like ? colors.Selected : colors.Gray2}
      />
      {listType === 'mainList' ? (
        <Text style={{ color: colors.Gray2 }}> {likeCountNumber}</Text>
      ) : (
        <View></View>
      )}
    </View>
  );
};
