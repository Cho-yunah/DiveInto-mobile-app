import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import * as colors from '@config/colors';
import { ContentItem, CommentNumber } from './types';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { LikeBtn } from './LikeBtn';

export default function CommunityItem({
  id,
  title,
  dateOfRegistration,
  writerNickname,
  imageUrl,
  commentCount,
  likeCount,
  liked,
  listType,
}: ContentItem) {
  const navigation = useNavigation();
  const basicThumnailUrl =
    'https://png.pngtree.com/png-clipart/20190516/original/pngtree-warm-color-cool-in-summer-cartoon-swimming-goggles-cool-png-image_3774944.jpg';

  const onMoveDetailScreen = () => {
    navigation.navigate('CommunityDetail', { id });
  };

  // moment 시간 계산
  const monthInterval = moment().diff(moment(dateOfRegistration), 'months');
  const dayInterval = moment().diff(moment(dateOfRegistration), 'days');
  const hoursInterval = moment().diff(moment(dateOfRegistration), 'hours');
  const minutesInterval = moment().diff(moment(dateOfRegistration), 'minutes');

  const timeOfWriting =
    dayInterval === 0
      ? hoursInterval === 0
        ? `${minutesInterval}분 전`
        : `${hoursInterval}시간 전`
      : 0 < dayInterval && dayInterval <= 30
      ? `${dayInterval}일 전`
      : `${monthInterval}달 전`;

  return (
    <TouchableOpacity
      style={styles.listItem}
      activeOpacity={0.8}
      onPress={onMoveDetailScreen}
    >
      {imageUrl ? (
        <Image style={styles.thumnailImage} source={{ uri: imageUrl }} />
      ) : (
        <Image
          style={styles.thumnailImage}
          source={{ uri: basicThumnailUrl }}
        ></Image>
      )}
      <View style={styles.contentInfo}>
        <Text>{title}</Text>
        <View style={styles.flexBox}>
          <Text>{writerNickname}</Text>
          <Entypo name="dot-single" size={14} color={colors.BlackText} />
          <Text>{timeOfWriting}</Text>
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
      <View style={styles.iconBox}>
        <CommentNum commentNum={commentCount} />
        <LikeBtn id={id} likeCount={likeCount} liked={liked} />
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

// let time
// if (dayInterval === 0) {
//     return (
//       hoursInterval === 0
//       ? time=`${minutesInterval}분 전`
//       : tim`${hoursInterval}시간 전`)
// }
// else if (0 < dayInterval && dayInterval <= 30){
//   return `${dayInterval}일 전`
// }
// else {return `${monthInterval}달 전` }
