import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { likeState } from '@recoil/CommunityStack';
import { useRecoilValue } from 'recoil';
import { likeBtnPropsType } from './types';
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

  const likeCountNumber = like
    ? likeCount + 1
    : likeCount === 0
    ? 0
    : likeCount;

  return (
    <View style={styles.commentAndLike}>
      <FontAwesome
        name="heart"
        size={16}
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
