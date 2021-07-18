import instance from '@/src/lib/api/axios';
import {
  lectureDetailPicsState,
  LectureDetailPicsType,
  lectureIdState,
} from '@/src/recoil/LectureStack';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const useRequestLecturePics = (): LectureDetailPicsType[] => {
  const [lecturePics, setLecturePics] = useRecoilState<LectureDetailPicsType[]>(
    lectureDetailPicsState,
  );
  const lectureId = useRecoilValue(lectureIdState);

  useEffect(() => {
    const requestLectureImages = async () => {
      try {
        const { data } = await instance.get(
          `http://52.79.225.4:8081/lectureImage/list?lectureId=${lectureId}`,
        );

        setLecturePics(data._embedded.lectureImageUrlList || []);
        console.log(lecturePics);
      } catch (e) {
        console.log(e);
      }
    };

    requestLectureImages();
  }, []);

  return lecturePics;
};

export default useRequestLecturePics;
