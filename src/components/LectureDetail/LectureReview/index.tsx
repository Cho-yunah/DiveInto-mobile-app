import React, { useEffect } from 'react';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { LectureReviewStyles as styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PersonalReview from './PersonalReview';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import {
  lectureCommonSelectorFamily,
  lectureReviewType,
  lectureSortedReviewSelector,
  sortByState,
  SortByType,
} from '@/src/recoil/LectureStack';
import SortBySelector from './SortBySelector';
import NoReviewComponent from './NoReviewComponent';

const LectureReview = () => {
  const { state, contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('Info'),
  );
  const lectureReviews = useRecoilValueLoadable<lectureReviewType[]>(
    lectureSortedReviewSelector,
  );
  const setSortBy = useSetRecoilState<SortByType>(sortByState);

  useEffect(() => setSortBy('writeDate,DESC'), []);

  if (
    state === 'loading' ||
    lectureReviews.state === 'loading' ||
    lectureReviews.state === 'hasError'
  )
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>후기</Text>
          <View style={styles.totalAvgRateContainer}>
            <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />

            <Text style={styles.totalAvgRateText}>0.0 / 5점</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator size={25} color={'#50CAD2'} />
        </View>
      </ScrollView>
    );
  else
    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>후기</Text>
            <View style={styles.totalAvgRateContainer}>
              <FontAwesome name="star" size={16} color={'rgb(248,194,93)'} />

              <Text style={styles.totalAvgRateText}>
                {contents?.reviewTotalAvg.toFixed(1)} / 5점
              </Text>
            </View>
          </View>

          <View style={styles.orderBySelectorsContainer}>
            <SortBySelector
              sortByText={'writeDate,DESC'}
              sortByTextKr={'최신순'}
              isDisabled={!lectureReviews.contents.length}
            />
            <SortBySelector
              sortByText={'totalStarAvg,ASC'}
              sortByTextKr={'낮은평순'}
              isDisabled={!lectureReviews.contents.length}
            />
            <SortBySelector
              sortByText={'totalStarAvg,DESC'}
              sortByTextKr={'높은평순'}
              isDisabled={!lectureReviews.contents.length}
            />
          </View>

          <TouchableOpacity
            style={styles.seeMoreBtn}
            onPress={() => console.warn('더보기클릭')}
            disabled={!lectureReviews.contents.length}
          >
            <Text style={styles.seeMoreBtnText}>더보기</Text>
          </TouchableOpacity>
          <View>
            {!!lectureReviews?.contents?.length ? (
              <FlatList
                renderItem={({ item }) => (
                  <PersonalReview item={item} key={item.id} />
                )}
                data={lectureReviews.contents as lectureReviewType[]}
              />
            ) : (
              <NoReviewComponent />
            )}
          </View>
        </ScrollView>
      </>
    );
};

export default LectureReview;
