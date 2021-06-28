import instance from '@/src/lib/api/axios';
import { lectureInstructorProfileState } from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { InstructorProfileStyles as styles } from './styles';
import useRequestInstructorProfile from './useRequestInstructorProfile';

const InstructorProfile = () => {
  const { nickName, selfIntroduction, profilePhotoUrl } = useRecoilValue(
    lectureInstructorProfileState,
  );
  const windowWidth = useWindowDimensions().width;
  useRequestInstructorProfile();

  return (
    <View style={styles.container}>
      {profilePhotoUrl ? (
        <Text style={styles.instructorInfoTitle}>강사 프로필</Text>
      ) : (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={40} height={20} />
        </SkeletonPlaceholder>
      )}
      <View style={styles.profileInfoContainer}>
        {profilePhotoUrl ? (
          <Image
            source={{
              uri: profilePhotoUrl,
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
          {nickName ? (
            <>
              <Text style={styles.nickname}>{nickName}</Text>
              <Text style={styles.instructorBrief}>{selfIntroduction}</Text>
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
