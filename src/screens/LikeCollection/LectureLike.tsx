import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { PopularLecture } from '@/src/components/MainList/Lecture/PopularLectureList';
import { styles } from './styles';
import instance from '@/src/lib/api/axios';
import { useRecoilValue } from 'recoil';
import { atkState } from '@/src/recoil/ProfileStack';
import { LectureLikeProps } from './types';
import CommonLoading from '@/src/components/common/CommonLoading';

export default function LectureLikeScreen() {
  const atk = useRecoilValue(atkState);
  const [lectureList, setLectureList] = useState<[] | null>(null);

  useEffect(() => {
    const getLikeLecture = async () => {
      try {
        const res = await instance.get('/lecture/like/list?page=0&size=2', {
          headers: {
            Authorization: atk,
          },
        });

        setLectureList(res.data._embedded.likeLectureInfoList);
      } catch (err) {
        console.log(err);
      }
    };

    getLikeLecture();
  }, [atk]);

  const ListEl = lectureList ? (
    <FlatList
      data={lectureList}
      renderItem={({ item }: { item: LectureLikeProps }) => {
        return (
          <PopularLecture
            title={item.title}
            organization={item.organization}
            level={item.level}
            region={item.region}
            maxNumber={item.maxNumber}
            lectureTime={item.lectureTime}
            equipmentNames={item.equipmentNames}
            image={item.imageUrl}
            reviewAvg={2.5}
            reviewCount={item.reviewCount}
          />
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  ) : (
    <CommonLoading />
  );

  return <View style={styles.eachContainer}>{ListEl}</View>;
}
