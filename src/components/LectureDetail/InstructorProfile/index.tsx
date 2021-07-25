import { lectureCommonSelectorFamily } from '@/src/recoil/LectureStack';
import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useRecoilValueLoadable } from 'recoil';
import { InstructorProfileStyles as styles } from './styles';

const InstructorProfile = () => {
  const { state, contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('InstructorProfile'),
  );
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      {state === 'hasValue' ? (
        <Text style={styles.instructorInfoTitle}>강사 프로필</Text>
      ) : (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={40} height={20} />
        </SkeletonPlaceholder>
      )}
      <View style={styles.profileInfoContainer}>
        {state === 'hasValue' ? (
          <Image
            source={{
              uri: contents.profilePhotoUrl,
            }}
            style={styles.profilePic}
          />
        ) : (
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={40}
              height={40}
              borderRadius={50}
            />
          </SkeletonPlaceholder>
        )}
        <View
          style={[styles.instructorInfoContainer, { width: windowWidth - 85 }]}
        >
          {state === 'hasValue' ? (
            <>
              <Text style={styles.nickname}>{contents.nickName}</Text>
              <Text style={styles.instructorBrief}>
                {contents.selfIntroduction}
              </Text>
            </>
          ) : (
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item width={'100%'} height={40} />
            </SkeletonPlaceholder>
          )}
        </View>
      </View>
    </View>
  );
};

export default InstructorProfile;
