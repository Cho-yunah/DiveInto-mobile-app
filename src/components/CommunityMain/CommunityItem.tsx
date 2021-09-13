import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { TimeOfWriting } from './TimeOfWriting';
import { useSetRecoilState } from 'recoil';
import { styles } from './styles';
import { CommentNumber, ContentItemType } from './types';
import * as colors from '@config/colors';
import { LikeBtn } from './LikeBtn';
import { likeState } from '@recoil/CommunityStack';

export default function CommunityItem({
  id,
  title,
  dateOfRegistration,
  writerNickname,
  imageUrl,
  commentCount,
  likeCount,
  liked,
}: ContentItemType) {
  const navigation = useNavigation();
  const basicThumnailUrl =
    'https://png.pngtree.com/png-clipart/20190516/original/pngtree-warm-color-cool-in-summer-cartoon-swimming-goggles-cool-png-image_3774944.jpg';

  const setLike = useSetRecoilState(likeState(id));

  useEffect(() => {
    setLike(liked);
  }, [liked]);

  const onMoveDetailScreen = () => {
    navigation.navigate('CommunityDetail', { id });
  };

  return (
    <TouchableOpacity
      style={styles.listItem}
      activeOpacity={0.8}
      onPress={onMoveDetailScreen}
    >
      <Image
        style={styles.thumnailImage}
        source={{ uri: imageUrl ? imageUrl : basicThumnailUrl }}
      />
      <View style={styles.contentInfo}>
        <View style={styles.title}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        <View style={styles.flexBox}>
          <Text>{writerNickname}</Text>
          <Entypo name="dot-single" size={12} color={colors.BlackText} />
          <TimeOfWriting time={dateOfRegistration} />
        </View>
      </View>
      <View style={styles.iconBox}>
        <CommentNum commentNum={commentCount} />
        <LikeBtn
          id={id}
          likeCount={likeCount}
          liked={liked}
          listType="mainList"
        />
      </View>
    </TouchableOpacity>
  );
}
// comment 갯수
const CommentNum = ({ commentNum }: CommentNumber) => {
  return (
    <View style={styles.commentAndLike}>
      <MaterialIcons name="comment" size={14} color={colors.Gray2} />
      <Text style={{ color: colors.Gray2 }}>{commentNum}</Text>
    </View>
  );
};
