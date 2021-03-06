import React, { useState, useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Background } from '@config/colors';
import { AddLecture2Props } from '@navigators/MyLectureStack/types';

import NextButton from '@components/common/NextButton';
import {
  RegionSelector,
  ClassKindSelector,
  OrganaizationSelector,
  LevelSelector,
} from '@components/Instructor/AddLecture/DropDownPickers';
import {
  GetInput,
  GetLectureTime,
  GetPeriod,
} from '@components/Instructor/AddLecture/GetInputs';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  RegionSelect,
  ClassKindSelect,
  OrganaizationSelect,
  LevelSelect,
  LecturePeriodInput,
  LectureTimeInput,
  LectureTitleInput,
  LectureDescriptionInput,
  LecturePriceInput,
  LectureMaxStdNumInput,
} from '@recoil/Instructor/AddLecture';
export function AddLecture2({ navigation }: AddLecture2Props) {
  // 컴포넌트에서 설정된 값
  const region = useRecoilValue(RegionSelect);
  const classKind = useRecoilValue(ClassKindSelect);
  const organaization = useRecoilValue(OrganaizationSelect);
  const level = useRecoilValue(LevelSelect);
  const period = useRecoilValue(LecturePeriodInput);
  const lectureTime = useRecoilValue(LectureTimeInput);
  // 여기서 설정해야하는 값
  const title = useRecoilValue(LectureTitleInput);
  const description = useRecoilValue(LectureDescriptionInput);
  const price = useRecoilValue(LecturePriceInput);
  const [max, setMax] = useRecoilState(LectureMaxStdNumInput);

  useLayoutEffect(() => {
    const onPress = () => {
      navigation.navigate('장비등록');
      console.log(
        region,
        classKind,
        organaization,
        level,
        period,
        lectureTime,
        max,
        title,
        description,
        price,
      );
    };
    navigation.setOptions({
      title: '강의등록',
      headerRight: () => <NextButton onPress={onPress} text="다음" disable />,
    });
  }, [region, classKind, organaization, level, period, lectureTime, max]);

  return (
    <ScrollView style={{ backgroundColor: Background, margin: 15 }}>
      <RegionSelector zIndex={4} />
      <ClassKindSelector zIndex={3} />
      <OrganaizationSelector zIndex={2} />
      <LevelSelector zIndex={1} />
      <GetInput
        placeholder="수업당 최대 수강생 수를 입력해주세요."
        keyboardType="number-pad"
        onChange={value => setMax(parseInt(value))}
      />
      <GetPeriod />
      <GetLectureTime />
    </ScrollView>
  );
}

// 리팩토링 제안
// Selector 하나만 만들고, label 파일을 만들어서 각각 export시켜서 쓰는 걸로 리팩토링 하면 깔끔해질듯
