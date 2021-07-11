import React, { useState, useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Background } from '@config/colors';
import { AddLectureProps } from '@navigators/MyLectureStack/types';

import NextButton from '@components/common/NextButton';
import {
  ResionSelector,
  ClassKindSelector,
  OrganaizationSelector,
  LevelSelector,
} from '@components/Instructor/AddLecture/DropDownPickers';
import { GetInput } from '@components/Instructor/AddLecture/GetInputs';
export function AddLecture({ navigation }: AddLectureProps) {
  useLayoutEffect(() => {
    const onPress = () => {};
    navigation.setOptions({
      headerRight: () => <NextButton onPress={onPress} text="등록하기" />,
    });
  }, []);

  const [selected, setSelected] = useState();

  return (
    <ScrollView style={{ backgroundColor: Background, margin: 15 }}>
      <ResionSelector zIndex={4} />
      <ClassKindSelector zIndex={3} />
      <OrganaizationSelector zIndex={2} />
      <LevelSelector zIndex={1} />
      <GetInput placeholder="강의 제목을 작성해주세요." />
      <GetInput placeholder="강의 내용을 작성해주세요." />
      <GetInput
        placeholder="강의 가격을 입력해주세요."
        keyboardType="number-pad"
      />
      <GetInput
        placeholder="수업당 최대 수강생 수를 입력해주세요."
        keyboardType="number-pad"
      />
      <GetInput
        placeholder="소요 일수 - 단회차,다회차 구분용"
        keyboardType="number-pad"
      />
      <GetInput placeholder="강의 소요 시간 - 예) 02:30:00 " />
    </ScrollView>
  );
}

// 리팩토링 제안
// Selector 하나만 만들고, label 파일을 만들어서 각각 export시켜서 쓰는 걸로 리팩토링 하면 깔끔해질듯
