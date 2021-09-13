import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecommentDetailStyles as styles } from '../styles';
import {
  atkState,
  checkRecommentWriter,
  decodeTokenType,
  recommentItemType,
  recommentState,
} from '@recoil/CommunityStack';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TimeOfWriting } from '@components/CommunityMain/TimeOfWriting';
import jwt_decode from 'jwt-decode';
import { RecommentListType } from '../types';
import { DeleteBtn } from '../ButtonCollection';

export const RecommentItem = ({
  nickName,
  profileUrl,
  dateOfWriting,
  content,
  recommentId,
  commentId,
}: recommentItemType) => {
  const token = useRecoilValue(atkState);
  const decodeToken = jwt_decode<decodeTokenType>(token || '') || null;
  const recommentWriterInfo = useRecoilValue<RecommentListType[]>(
    recommentState(commentId),
  );
  const [recommentWriter] = recommentWriterInfo.map(
    item => item.accountModel.id,
  );
  const [isRecommentWriter, setIsRecommentWriter] =
    useRecoilState(checkRecommentWriter);

  // 대댓글 삭제 확인 모달
  useEffect(() => {
    decodeToken.user_name === `${recommentWriter}`
      ? setIsRecommentWriter(true)
      : setIsRecommentWriter(false);
  }, [recommentWriter]);

  return (
    <View style={styles.recommentBox}>
      <View style={styles.writerInfo}>
        <Image style={styles.profileImg} source={{ uri: profileUrl }} />
        <Text style={styles.nickname}>{nickName}</Text>
        <Text style={styles.date}>
          <TimeOfWriting time={dateOfWriting} />
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.recomment}>{content}</Text>
        {isRecommentWriter ? <DeleteBtn recommentId={recommentId} /> : null}
        {/* 삭제 확인 모달 띄우기 */}
      </View>
    </View>
  );
};
