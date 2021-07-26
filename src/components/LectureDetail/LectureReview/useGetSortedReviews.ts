import instance from '@/src/lib/api/axios';
import {
  lectureIdState,
  lectureReviewState,
  lectureReviewType,
} from '@/src/recoil/LectureStack';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SortByType } from './types';

const useGetSortedReviews = () => {
  const [sortBy, setSortBy] = useState<SortByType>('writeDate,DESC');
  const [reviews, setReviews] =
    useRecoilState<lectureReviewType[]>(lectureReviewState);
  const lectureId = useRecoilValue(lectureIdState);

  useEffect(() => {
    // writeDate,DESC(최신순), totalStarAvg,DESC(높은평점순), totalStarAvg,ASC(낮은평점순)
    const requestLectureReview = async (sortby: SortByType) => {
      if (!lectureId) return;
      try {
        const { data } = await instance.get(
          `/review/list?lectureId=${lectureId}&page=0&size=4&sort=${sortby}`,
        );
        setReviews(data?._embedded?.reviewInfoList || []);
      } catch (e) {
        console.log(e);
      }
    };

    requestLectureReview(sortBy);
  }, [sortBy, lectureId]);

  useEffect(() => {
    return () => setReviews([]);
  }, []);

  return { sortBy, setSortBy, reviews };
};

export default useGetSortedReviews;
