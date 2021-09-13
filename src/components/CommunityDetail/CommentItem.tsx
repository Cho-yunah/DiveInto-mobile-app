import React, { useEffect, useState } from 'react';
import { Image, View, Text, Animated, TouchableOpacity } from 'react-native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CommentDetailStyles as styles } from './styles';
import { CommentItemType, decodeTokenType, RecommentListType } from './types';
import jwt_decode from 'jwt-decode';
import {
  atkState,
  checkCommentWriter,
  commentIdState,
  recommentState,
  showRecommentState,
} from '@recoil/CommunityStack';
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting';
import { useRequestRecomments } from '@components/CommunityDetail/useRequestRecomments';
import { EditBtn, DeleteBtn } from './ButtonCollection';
import Recomment from './Recomment/Recomments';

export const CommentItem = ({
  nickName,
  profileUrl,
  dateOfWriting,
  content,
  commentId,
  commentWriterId,
}: CommentItemType) => {
  useRequestRecomments({ commentId }); // 대댓글 요청

  const token = useRecoilValue(atkState);
  const decodeToken = jwt_decode<decodeTokenType>(token || '') || null;

  const setCommentId = useSetRecoilState(commentIdState);
  const [isCommentWriter, setIsCommentWriter] = useRecoilState(
    checkCommentWriter(commentId),
  );

  const recommentList = useRecoilValue<RecommentListType[]>(
    recommentState(commentId),
  );
  const [showRecomment, setShowRecomment] = useRecoilState(
    showRecommentState(commentId),
  );

  useEffect(() => {
    // 댓글 작성자인지 확인
    decodeToken.user_name === `${commentWriterId}`
      ? setIsCommentWriter(true)
      : setIsCommentWriter(false);
  }, [commentWriterId]);

  // animation
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0));

  const toggleDropdown = () => {
    setCommentId(commentId);
    setShowRecomment(showRecomment => {
      if (showRecomment === false) {
        Animated.timing(animatedHeight, {
          toValue: 100,
          duration: 300,
          useNativeDriver: false,
        }).start();
        return true;
      } else {
        Animated.timing(animatedHeight, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
        return false;
      }
    });
  };

  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.commentBox}>
      <View style={styles.commentInfo}>
        <Image style={styles.image} source={{ uri: profileUrl }} />
        <Text style={styles.nicknameStyle}>{nickName}</Text>
        <Text style={styles.dateStyle}>
          <TimeOfWriting time={dateOfWriting} />
        </Text>
      </View>
      <Text style={styles.comment}>{content}</Text>

      {/* 댓글내 버튼 모음*/}
      <View style={styles.buttonBox}>
        <TouchableOpacity onPress={toggleDropdown}>
          <Text style={{ color: '#207AB4', fontSize: 12 }}>
            {recommentList.length === 0 ? '대댓글 쓰기' : '대댓글 보기'}
          </Text>
        </TouchableOpacity>

        {/* 댓글을 작성한 사람이 아닐경우 버튼 안보이게 */}
        {isCommentWriter ? (
          <View style={styles.edintingBtnBox}>
            <EditBtn commentId={commentId} />
            <DeleteBtn commentId={commentId} />
          </View>
        ) : null}
      </View>

      {/* Recomment 애니메이션 */}
      <Animated.View
        style={[styles.showingRecomment, { maxHeight: interpolatedHeight }]}
      >
        <Recomment commentId={commentId} />
      </Animated.View>
    </View>
  );
};
