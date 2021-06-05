import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import {
  LectureReviewStyles as styles,
  ReviewListStyles as RS,
} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const reviewData = [
  {
    avgRate: 4.5,
    instructorRate: 5,
    lectureRate: 5,
    locationRate: 4,
    content: '이런이런식으로 재밌었습니다~ 근데 다시는 하고싶지 않아요.',
    pics: [1, 2],
  },
  {
    avgRate: 4.5,
    instructorRate: 5,
    lectureRate: 5,
    locationRate: 4,
    content: '이런이런식으로 재밌었습니다~ 근데 다시는 하고싶지 않아요.',
    pics: [],
  },
  {
    avgRate: 4.5,
    instructorRate: 5,
    lectureRate: 5,
    locationRate: 4,
    content: '이런이런식으로 재밌었습니다~ 근데 다시는 하고싶지 않아요.',
    pics: [],
  },
  {
    avgRate: 4.5,
    instructorRate: 5,
    lectureRate: 5,
    locationRate: 4,
    content: '이런이런식으로 재밌었습니다~ 근데 다시는 하고싶지 않아요.',
    pics: [],
  },
];
const totalAvgRate = 4.5;

const LectureReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>후기</Text>
        <View style={styles.totalAvgRateContainer}>
          <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />
          <Text style={styles.totalAvgRateText}>{totalAvgRate}/5점</Text>
        </View>
      </View>

      <View style={styles.orderBySelectorsContainer}>
        <Pressable style={[styles.orderBySelectorBtnActive]}>
          <Text style={styles.orderBySelectorText}>최신순</Text>
        </Pressable>
        <View style={[styles.orderBySelectorBtn]}>
          <Text style={styles.orderBySelectorText}>낮은평순</Text>
        </View>
        <Pressable style={styles.orderBySelectorBtn}>
          <Text style={styles.orderBySelectorText}>높은평순</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.seeMoreBtn}
        onPress={() => console.warn('더보기클릭')}
      >
        <Text style={styles.seeMoreBtnText}>더보기</Text>
      </Pressable>

      <FlatList
        renderItem={({ item, index }) => (
          <View key={index} style={RS.ReviewListItemContainer}>
            <Text style={RS.avgRateText}>평점 {item.avgRate}점</Text>
            {item.pics.length ? (
              <FontAwesome name="picture-o" size={16} style={RS.avgRateIcon} />
            ) : null}
          </View>
        )}
        data={reviewData}
      />
    </View>
  );
};

export default LectureReview;
