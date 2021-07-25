import addCashComma from '@/src/lib/utils/addCashComma';
import { lectureInfoSelector } from '@/src/recoil/LectureStack';
import React from 'react';
import { Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useRecoilValue } from 'recoil';
import { LectureInfoStyles as styles } from './styles';
import useRequestLectureInfo from './useRequestLectureInfo';

const LectureInfo = () => {
  const { title, organization, level, description, price } =
    useRecoilValue(lectureInfoSelector);

  useRequestLectureInfo();

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.lectureTitle}>
          {title ? (
            `${title}`
          ) : (
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item width={360} height={20} />
            </SkeletonPlaceholder>
          )}
        </Text>
        <View style={styles.lectureTagContainer}>
          <View style={styles.lectureTagInnerContainer}>
            {organization ? (
              <>
                <Text style={styles.lectureTag}>#{organization}</Text>
                <Text style={styles.lectureTag}>#LV{level[5]}</Text>
              </>
            ) : (
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={100} height={20} />
              </SkeletonPlaceholder>
            )}
          </View>
          <View style={styles.lecturePriceContainer}>
            {price ? (
              <>
                <Text style={styles.lecturePrice}>{addCashComma(price)}</Text>
                <Text style={styles.lecturePriceUnit}>원</Text>
              </>
            ) : (
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={100} height={20} />
              </SkeletonPlaceholder>
            )}
          </View>
        </View>
      </View>
      {description ? (
        <View style={styles.bottomInfo}>
          <Text style={styles.bottomInfoText}>{description}</Text>
        </View>
      ) : (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={360} height={20} marginTop={12} />
        </SkeletonPlaceholder>
      )}
    </View>
  );
};

export default LectureInfo;
