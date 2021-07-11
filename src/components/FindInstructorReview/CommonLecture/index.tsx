import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';
import LectureContents from './LectureContents';
import LectureImage from './LectureImage';
import { CommonLectureProps } from './types';
import { useNavigation } from '@react-navigation/native';

export default function CommonLecture({
  id,
  title,
  organization,
  level,
  region,
  imageUrl,
}: CommonLectureProps) {
  const navigation = useNavigation();

  const moveReviewCollection = () => {
    navigation.navigate('ReviewCollection', {
      id,
      title,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={moveReviewCollection}>
      <LectureImage img={imageUrl} />
      <LectureContents
        id={id}
        title={title}
        organization={organization}
        level={level}
        region={region}
      />
    </TouchableOpacity>
  );
}
