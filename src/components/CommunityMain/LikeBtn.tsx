import React, { useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { likeBtnPropsType } from '@/src/recoil/CommunityStack';
import { likeState } from '@recoil/CommunityStack';
import { useRecoilState } from 'recoil';
import { styles } from './styles';
import * as colors from '@config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getInstanceATK } from '@/src/lib/api/axios';

// 좋아요 버튼
export const LikeBtn = ({
  id,
  likeCount,
  liked,
  listType,
}: likeBtnPropsType) => {
  const [like, setLike] = useRecoilState(likeState(id));
  console.log(liked);

  useEffect(() => {
    setLike(liked);
  }, [liked]);

  // setLike()

  const likeCountNumber = liked
    ? like
      ? likeCount
      : likeCount - 1
    : like
    ? likeCount + 1
    : likeCount === 0
    ? 0
    : likeCount;

  const Clickedlike = useCallback(() => {
    const requestToggleLiked = async () => {
      const instanchATK = await getInstanceATK();

      try {
        setLike(!like);

        like
          ? await instanchATK.delete(`/community/post/${id}/like`)
          : await instanchATK.post(`/community/post/${id}/like`);
      } catch (e) {
        console.log(e);
      }
    };

    requestToggleLiked();
  }, [like]);

  return (
    <TouchableOpacity style={styles.commentAndLike} onPress={Clickedlike}>
      <FontAwesome
        name="heart"
        size={14}
        color={liked || like ? colors.Selected : colors.Gray2}
      />
      {listType === 'mainList' ? (
        <Text style={{ color: colors.Gray2 }}> {likeCountNumber}</Text>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
};
