import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import instance from '@/src/lib/api/axios';
import { atkState } from '@recoil/ProfileStack/store';

function useRequestTotalAvg(id: number) {
  const [reviewTotalAvg, setReviewTotalAvg] = useState<number | null>(null);
  const atk = useRecoilValue(atkState);

  useEffect(() => {
    const getReviewTotalAvg = async () => {
      try {
        const res = await instance.get(`/lecture?id=${id}`);

        setReviewTotalAvg(res.data.reviewTotalAvg);
      } catch (err) {
        console.log(err);
      }
    };

    getReviewTotalAvg();
  }, [atk, id]);

  return reviewTotalAvg;
}

export default useRequestTotalAvg;
