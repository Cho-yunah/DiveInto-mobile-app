import instance from '@/src/lib/api/axios';
import { lectureDetailState, lectureIdState } from '@/src/recoil/LectureStack';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const useRequestLectureInfo = () => {
  const setLectureDetail = useSetRecoilState(lectureDetailState);
  const lectureId = useRecoilValue(lectureIdState);
  useEffect(() => {
    const requestLectureDetail = async () => {
      try {
        const res = await instance.get(`/lecture?id=${lectureId}`);

        console.log(res.data);

        const {
          id,
          title,
          classKind,
          organization,
          level,
          maxNumber,
          period,
          description,
          price,
          region,
          reviewTotalAvg,
          reviewCount,
          isMarked,
        } = res.data;
        setLectureDetail({
          id,
          title,
          classKind,
          organization,
          level,
          maxNumber,
          period,
          description,
          price,
          region,
          reviewTotalAvg,
          reviewCount,
          isMarked,
        });
      } catch (e) {
        console.log(e);
      }
    };

    requestLectureDetail();
  }, [lectureId]);
};

export default useRequestLectureInfo;
