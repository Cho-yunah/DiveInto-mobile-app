import React from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { LectureReviewStyles as styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PersonalReview from './PersonalReview';
import ReserveBtn from './ReserveBtn';

const reviewData = [
  {
    avgRate: 5,
    instructorRate: 5,
    lectureRate: 5,
    locationRate: 5,
    content: '이런이런식으로 재밌었습니다~ 근데 다시는 하고싶지 않아요.',
    pics: [
      'http://img.danawa.com/prod_img/500000/943/801/img/5801943_1.jpg?shrink=360:360&_v=20200228152538',
      'https://lh3.googleusercontent.com/proxy/ql6A496YPy5dAwjupD1PtCKruV4_2Z_-CtqPh3ZvqT-yrXGfR_1MVDLgbDIi8KThYRE06IvLXRzEtVhnb6tmiAGkXPtCLO3eEMKJejiqwVUk1TkhQe8h1zM',
      'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_36338/20200117063155_PInSO/jpg',
    ],
  },
  {
    avgRate: 3,
    instructorRate: 3.3,
    lectureRate: 3,
    locationRate: 3,
    content: '숨막혀 죽을뻔했어요',
    pics: [],
  },
  {
    avgRate: 2.67,
    instructorRate: 3,
    lectureRate: 4,
    locationRate: 1,
    content: '강사가 돈을 훔쳐갔습니다.',
    pics: [],
  },
  {
    avgRate: 5,
    instructorRate: 5,
    lectureRate: 5,
    locationRate: 4,
    content:
      '날이 좋습니다. 좀 덥지만, 그래도 되게 재미있게 했어요. It was awesome',
    pics: [],
  },
];
const totalAvgRate = 4.5;

const LectureReview = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>후기</Text>
          <View style={styles.totalAvgRateContainer}>
            <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />
            <Text style={styles.totalAvgRateText}>{totalAvgRate}/5점</Text>
          </View>
        </View>

        <View style={styles.orderBySelectorsContainer}>
          <Pressable style={styles.orderBySelectorBtnActive}>
            <Text style={styles.orderBySelectorText}>최신순</Text>
          </Pressable>
          <View style={styles.orderBySelectorBtn}>
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
            <PersonalReview item={item} index={index} />
          )}
          data={reviewData}
        />
      </ScrollView>
    </>
  );
};

export default LectureReview;
