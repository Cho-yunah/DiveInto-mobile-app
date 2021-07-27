import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { LectureReviewStyles as styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PersonalReview from './PersonalReview';
import { lectureDetailState } from '@/src/recoil/LectureStack';
import { useRecoilValue } from 'recoil';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import useGetSortedReviews from './useGetSortedReviews';

const LectureReview = () => {
  const { reviewTotalAvg } = useRecoilValue(lectureDetailState);
  const { sortBy, setSortBy, reviews } = useGetSortedReviews();

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          {reviewTotalAvg ? (
            <>
              <Text style={styles.title}>후기</Text>
              <View style={styles.totalAvgRateContainer}>
                <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />

                <Text style={styles.totalAvgRateText}>
                  {reviewTotalAvg.toFixed(1)} / 5점
                </Text>
              </View>
            </>
          ) : (
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item width={360} height={35} />
            </SkeletonPlaceholder>
          )}
        </View>

        <View style={styles.orderBySelectorsContainer}>
          <TouchableOpacity
            style={
              sortBy === 'writeDate,DESC'
                ? styles.orderBySelectorBtnActive
                : styles.orderBySelectorBtn
            }
            onPress={() => setSortBy('writeDate,DESC')}
          >
            <Text style={sortBy === 'writeDate,DESC' ? { color: 'white' } : {}}>
              최신순
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              sortBy === 'totalStarAvg,ASC'
                ? styles.orderBySelectorBtnActive
                : styles.orderBySelectorBtn
            }
            onPress={() => setSortBy('totalStarAvg,ASC')}
          >
            <Text
              style={sortBy === 'totalStarAvg,ASC' ? { color: 'white' } : {}}
            >
              낮은평순
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              sortBy === 'totalStarAvg,DESC'
                ? styles.orderBySelectorBtnActive
                : styles.orderBySelectorBtn
            }
            onPress={() => setSortBy('totalStarAvg,DESC')}
          >
            <Text
              style={sortBy === 'totalStarAvg,DESC' ? { color: 'white' } : {}}
            >
              높은평순
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.seeMoreBtn}
          onPress={() => console.warn('더보기클릭')}
        >
          {!!reviewTotalAvg && (
            <Text style={styles.seeMoreBtnText}>더보기</Text>
          )}
        </TouchableOpacity>
        {reviews.length ? (
          <View>
            <FlatList
              renderItem={({ item }) => (
                <PersonalReview item={item} key={item.id} />
              )}
              data={reviews}
            />
          </View>
        ) : (
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={60}
              marginBottom={12}
              marginTop={5}
            />
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={60}
              marginBottom={12}
              marginTop={5}
            />
          </SkeletonPlaceholder>
        )}
      </ScrollView>
    </>
  );
};

export default LectureReview;
