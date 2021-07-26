import addCashComma from '@/src/lib/utils/addCashComma';
import { lectureCommonSelectorFamily } from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { LectureInfoStyles as styles } from './styles';

const LectureInfo = () => {
  const lectureInfo = useRecoilValue(lectureCommonSelectorFamily('Info'));

  useEffect(() => {
    console.log(lectureInfo);
  }, [lectureInfo]);

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.lectureTitle}>
          {lectureInfo?.title || '제목이 없습니다.'}
        </Text>
        <View style={styles.lectureTagContainer}>
          <View style={styles.lectureTagInnerContainer}>
            <>
              <Text style={styles.lectureTag}>
                #{lectureInfo?.organization || '단체명이 없습니다.'}
              </Text>
              <Text style={styles.lectureTag}>
                #LV{lectureInfo?.level[5] || '레벨이 없습니다.'}
              </Text>
            </>
          </View>
          <View style={styles.lecturePriceContainer}>
            <Text style={styles.lecturePrice}>
              {addCashComma(lectureInfo?.price || 0)}
            </Text>
            <Text style={styles.lecturePriceUnit}>원</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomInfo}>
        <Text style={styles.bottomInfoText}>
          {lectureInfo?.description || '강의 소개가 없습니다.'}
        </Text>
      </View>
    </View>
  );
};

export default LectureInfo;
