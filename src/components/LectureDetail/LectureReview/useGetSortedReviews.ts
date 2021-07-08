import instance from '@/src/lib/api/axios';
import {
  lectureReviewState,
  lectureReviewType,
} from '@/src/recoil/LectureStack';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { SortByType } from './types';

const useGetSortedReviews = () => {
  const [sortBy, setSortBy] = useState<SortByType>('writeDate,DESC');
  const [reviews, setReviews] =
    useRecoilState<lectureReviewType[]>(lectureReviewState);

  useEffect(() => {
    // writeDate,DESC(최신순), totalStarAvg,DESC(높은평점순), totalStarAvg,ASC(낮은평점순)
    const requestLectureReview = async (sortby: SortByType) => {
      try {
        const { data } = await instance.get(
          `http://52.79.225.4:8081/review/list?lectureId=1&page=0&size=20&sort=${sortby}`,
        );
        setReviews(data?._embedded?.reviewInfoList || []);
      } catch (e) {
        console.log(e);
      }
    };

    requestLectureReview(sortBy);
  }, [sortBy]);

  return { sortBy, setSortBy, reviews };
};

export default useGetSortedReviews;
