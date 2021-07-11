import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import instance from '@lib/api/axios';
import ReviewFilterContainer from '@components/FindInstructorReview/ReviewFilter';
import CommonLecture from '@components/FindInstructorReview/CommonLecture';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { atkState } from '@/src/recoil/ProfileStack';

export default function FindAllReviewScreen() {
  // const setLectureList = useSetRecoilState();
  const atk = useRecoilValue(atkState);

  useEffect(() => {
    const getLectureInfo = async () => {
      try {
        const res = await instance.get('/lecture/manage/list?page=0&size=5', {
          headers: {
            Authorization: atk,
          },
        });

        console.log(res.data._embedded.myLectureInfoList);
      } catch (err) {
        console.log(err);
      }
    };

    getLectureInfo();
  }, [atk]);

  return (
    <ScrollView style={styles.container}>
      <ReviewFilterContainer />
      <CommonLecture />
      <CommonLecture />
      <CommonLecture />
      <CommonLecture />
      <CommonLecture />
      <CommonLecture />
    </ScrollView>
  );
}
