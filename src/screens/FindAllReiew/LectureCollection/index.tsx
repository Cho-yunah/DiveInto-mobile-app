import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import LectureFilterContainer from '@/src/components/FindInstructorReview/LectureFilter';
import CommonLecture from '@components/FindInstructorReview/CommonLecture';
import { atkState } from '@recoil/ProfileStack';
import instance from '@/src/lib/api/axios';
import { CommonLectureProps } from '@components/FindInstructorReview/types';
import CommonLoading from '@/src/components/common/CommonLoading';

export default function LectureCollectionScreen() {
  const atk = useRecoilValue(atkState);
  const [LectureList, setLectureList] = useState<[] | null>(null);

  useEffect(() => {
    const getLectureInfo = async () => {
      try {
        const res = await instance.get('/lecture/manage/list?page=0&size=5', {
          headers: {
            Authorization: atk,
          },
        });

        setLectureList(res.data._embedded.myLectureInfoList);
      } catch (err) {
        console.log(err);
      }
    };

    getLectureInfo();
  }, [atk]);

  const ListEl = LectureList ? (
    <View style={styles.container}>
      <LectureFilterContainer />
      <FlatList
        data={LectureList}
        renderItem={({ item }: { item: CommonLectureProps }) => {
          const { id, title, organization, level, region, imageUrl } = item;

          return (
            <CommonLecture
              id={id}
              title={title}
              organization={organization}
              level={level}
              region={region}
              imageUrl={imageUrl}
            />
          );
        }}
        keyExtractor={item => String(item.id)}
      />
    </View>
  ) : (
    <CommonLoading />
  );

  return ListEl;
}
