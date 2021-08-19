import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import LectureFilterContainer from '@components/FindInstructorReview/LectureFilter';
import CommonLecture from '@components/FindInstructorReview/CommonLecture';
import { CommonLectureProps } from '@components/FindInstructorReview/types';
import CommonLoading from '@components/common/CommonLoading';
import { getMyLectureListSelector } from '@recoil/ProfileStack/dataFetch';
import withSuspense from '@/src/lib/HOC/withSuspense';
import CommonEmptyView from '@/src/components/common/CommonEmptyView';

function LectureCollectionScreen() {
  const list = useRecoilValue(getMyLectureListSelector);
  const [lectureList, setLectureList] = useState<CommonLectureProps[] | null>(
    null,
  );

  useEffect(() => {
    setLectureList(list._embedded.myLectureInfoList);
  }, [list]);

  if (!lectureList?.length) {
    <CommonEmptyView
      guideText="blablabla"
      buttonText="blablabla"
      moveViewName="프로필"
    />;
  }

  return (
    <View style={styles.container}>
      <LectureFilterContainer />
      <FlatList
        data={lectureList}
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
  );
}

export default withSuspense(LectureCollectionScreen);
