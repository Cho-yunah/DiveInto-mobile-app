import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import instance from '@/src/lib/api/axios';
import { SortByType } from '@components/LectureDetail/LectureReview/types';
import {
  lectureReviewAllState,
  lectureReviewAllType,
} from '@recoil/ProfileStack';

const useGetSortedReviews = (id: number) => {
  const [sortBy, setSortBy] = useState<SortByType>('writeDate,DESC');
  const [reviews, setReviews] = useRecoilState<lectureReviewAllType[]>(
    lectureReviewAllState,
  );

  useEffect(() => {
    // writeDate,DESC(최신순), totalStarAvg,DESC(높은평점순), totalStarAvg,ASC(낮은평점순)
    const requestLectureReview = async (sortby: SortByType) => {
      try {
        const { data } = await instance.get(
          `/review/list?lectureId=${id}&page=0&size=20&sort=${sortby}`,
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
