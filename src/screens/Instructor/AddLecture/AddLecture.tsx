import React, { useState, useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Background } from '@config/colors';
import { AddLectureProps } from '@navigators/MyLectureStack/types';
import { DocumentPickerResponse } from 'react-native-document-picker';

import NextButton from '@components/common/NextButton';
import {
  GetInput,
  GetImages,
} from '@components/Instructor/AddLecture/GetInputs';

import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  LectureTitleInput,
  LectureDescriptionInput,
  LecturePriceInput,
  LectureImages,
} from '@recoil/Instructor/AddLecture';

// import { lectureImageUpload } from '@lib/file/fileFetch';

export function AddLecture({ navigation }: AddLectureProps) {
  // 여기서 설정해야하는 값
  const [title, setTitle] = useRecoilState(LectureTitleInput);
  const [description, setDescription] = useRecoilState(LectureDescriptionInput);
  const [price, setPrice] = useRecoilState(LecturePriceInput);
  const [images, setImages] = useRecoilState(LectureImages);

  useLayoutEffect(() => {
    const onPress = () => {
      navigation.navigate('강의등록2');
      console.log('images : ', images);
    };
    navigation.setOptions({
      title: '강의등록',
      headerRight: () => <NextButton onPress={onPress} text="다음" />,
    });
  }, [title, description, price]);

  return (
    <ScrollView style={{ backgroundColor: Background, margin: 15 }}>
      <GetInput placeholder="강의 제목을 작성해주세요." onChange={setTitle} />
      <GetInput
        placeholder="강의 내용을 작성해주세요."
        onChange={setDescription}
      />
      <GetInput
        placeholder="강의 가격을 입력해주세요."
        keyboardType="number-pad"
        onChange={value => setPrice(parseInt(value))}
      />
      <GetImages
        onSelect={(images: DocumentPickerResponse[]) => setImages(images)}
      />
    </ScrollView>
  );
}

// 리팩토링 제안
// Selector 하나만 만들고, label 파일을 만들어서 각각 export시켜서 쓰는 걸로 리팩토링 하면 깔끔해질듯
