import addCashComma from '@/src/lib/utils/addCashComma';
import { lectureCommonSelectorFamily } from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useRecoilValueLoadable } from 'recoil';
import { LectureInfoStyles as styles } from './styles';

const LectureInfo = () => {
  const { state, contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('Info'),
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.lectureTitle}>
          {state === 'hasValue' ? (
            `${contents.title}`
          ) : (
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item width={360} height={20} />
            </SkeletonPlaceholder>
          )}
        </Text>
        <View style={styles.lectureTagContainer}>
          <View style={styles.lectureTagInnerContainer}>
            {state === 'hasValue' ? (
              <>
                <Text style={styles.lectureTag}>#{contents.organization}</Text>
                <Text style={styles.lectureTag}>#LV{contents.level[5]}</Text>
              </>
            ) : (
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={100} height={20} />
              </SkeletonPlaceholder>
            )}
          </View>
          <View style={styles.lecturePriceContainer}>
            {state === 'hasValue' ? (
              <>
                <Text style={styles.lecturePrice}>
                  {addCashComma(contents.price)}
                </Text>
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
      {state === 'hasValue' ? (
        <View style={styles.bottomInfo}>
          <Text style={styles.bottomInfoText}>{contents.description}</Text>
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
