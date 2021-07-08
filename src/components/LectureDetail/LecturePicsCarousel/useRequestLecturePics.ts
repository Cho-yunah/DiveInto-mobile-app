import instance from '@/src/lib/api/axios';
import {
  lectureDetailPicsState,
  LectureDetailPicsType,
} from '@/src/recoil/LectureStack';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useRequestLecturePics = (): LectureDetailPicsType[] => {
  const [lecturePics, setLecturePics] = useRecoilState<LectureDetailPicsType[]>(
    lectureDetailPicsState,
  );

  useEffect(() => {
    const requestLectureImages = async () => {
      try {
        const { data } = await instance.get(
          'http://52.79.225.4:8081/lectureImage/list?lectureId=1',
        );

        setTimeout(() => {
          setLecturePics(data._embedded.lectureImageUrlList || []);
          console.log(lecturePics);
        }, 2000);
      } catch (e) {
        console.log(e);
      }
    };

    requestLectureImages();
  }, []);

  return lecturePics;
};

export default useRequestLecturePics;
