import React, { useState, useLayoutEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { AddLocationProps } from '@navigators/MyLectureStack/types';

import NaverMap from '@legacy_cCommon/NaverMap';
import ButtomButtons from '@legacy_cCommon/BottomButtons';
import TextInput, { TextInputStatic } from '@legacy_cCommon/TextInputContainer';

import AsyncStorage from '@react-native-community/async-storage';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  LectureImages,
  RegionSelect,
  ClassKindSelect,
  OrganaizationSelect,
  LevelSelect,
  LectureTitleInput,
  LectureDescriptionInput,
  LecturePriceInput,
  LectureMaxStdNumInput,
  LecturePeriodInput,
  LectureTimeInput,
  EquipmentListAll,
  LectureGeoLocation,
  LectureRoadAddress,
  LectureLocationAlias,
} from '@recoil/Instructor/AddLecture';

import NextButton from '@components/common/NextButton';

import {
  NMapGeocodingAPI,
  NMapClientID,
  NMapClientSecret,
} from '@/src/legacy/config/strings';
import axios from 'axios';
import instance from '@lib/api/axios';

import { lectureImageUpload } from '@lib/file/fileFetch';

export function AddLocation({ navigation, route }: AddLocationProps) {
  const [baseLocation, setBaseLocation] = useState({
    latitude: 37.564362,
    longitude: 126.977011,
  });
  const title = useRecoilValue(LectureTitleInput);
  const region = useRecoilValue(RegionSelect);
  const classKind = useRecoilValue(ClassKindSelect);
  const organization = useRecoilValue(OrganaizationSelect);
  const level = useRecoilValue(LevelSelect);
  const description = useRecoilValue(LectureDescriptionInput);
  const price = useRecoilValue(LecturePriceInput);
  const maxNumber = useRecoilValue(LectureMaxStdNumInput);
  const period = useRecoilValue(LecturePeriodInput);
  const lectureTime = useRecoilValue(LectureTimeInput);

  const images = useRecoilValue(LectureImages);

  const equipmentInfos = useRecoilValue(EquipmentListAll);
  const [picker, setPicker] = useRecoilState(LectureGeoLocation);
  const [address, setAddress] = useRecoilState(LectureRoadAddress);
  const [alias, setAlias] = useRecoilState(LectureLocationAlias);

  useLayoutEffect(() => {
    const onPress = async () => {
      let lectureId: undefined | number = undefined;
      try {
        const res = await axios.post('http://52.79.225.4:8081/lecture/create', {
          title,
          region,
          classKind,
          organization,
          level,
          description,
          price,
          maxNumber,
          period,
          lectureTime,
          serviceTags: [''],
        });
        if (res.status !== 201) throw new Error('강의 생성 에러');
        lectureId = res.data.lectureId;
        console.log('강의 id : ', lectureId);

        const res2 = await axios.post(
          'http://52.79.225.4:8081/equipment/create/list',
          { lectureId, equipmentInfos },
        );
        if (res2.status !== 201) throw new Error('장비 등록 에러');

        const res3 = await axios.post(
          'http://52.79.225.4:8081/location/create',
          {
            lectureId,
            address: `${address} ${alias}`,
            ...picker,
          },
        );
        if (res3.status !== 201) throw new Error('위치 등록 에러');

        const atk = await AsyncStorage.getItem('atk');
        images &&
          lectureId &&
          atk &&
          (await lectureImageUpload({
            selectedFiles: images,
            uploadTo: 'http://52.79.225.4:8081/lectureImage/create/list',
            headers: { Authorization: atk },
            lectureId,
            onSuccess: res => {
              if (res.respInfo.status !== 201)
                throw new Error('이미지 등록 에러');
            },
          }));
      } catch (e) {
        console.log(e);
      }

      navigation.navigate('강의목록');
    };
    navigation.setOptions({
      title: '강의등록',
      headerRight: () => <NextButton onPress={onPress} text="완료" disable />,
    });
  }, [picker, address, alias]);

  const baseLocationChange = ({ latitude, longitude }) => {
    setBaseLocation({ latitude, longitude });
    // console.log('base : ', latitude, longitude);
  };

  const pickerChange = async ({ latitude, longitude }) => {
    setPicker({ latitude, longitude });
    console.log('picker : ', latitude, longitude);

    const result = await axios.get(
      'https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?',
      {
        headers: {
          'X-NCP-APIGW-API-KEY-ID': NMapClientID,
          'X-NCP-APIGW-API-KEY': NMapClientSecret,
        },
        params: {
          coords: `${longitude},${latitude}`,
          orders: 'roadaddr',
          output: 'json',
        },
      },
    );
    console.log('reverse geocoding status : ', result.status);
    const area1 = result.data.results[0].region.area1.name;
    const area2 = result.data.results[0].region.area2.name;
    const { name, number1, number2 } = result.data.results[0].land;

    const roadAddress = number2
      ? `${area1} ${area2} ${name} ${number1}-${number2}`
      : `${area1} ${area2} ${name} ${number1}`;
    console.log(roadAddress);
    setAddress(roadAddress);
  };

  const onSearchbar = () =>
    navigation.navigate('위치검색', {
      baseLocationChange,
    });

  const onPressLeft = () => {
    navigation.goBack();
  };

  const onPressRight = () => {
    route.params.onLocationSelected({ picker });
  };

  const func = {
    baseLocationChange,
    pickerChange,
    onSearchbar,
    onPressLeft,
    onPressRight,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TextInputStatic
        hideTitle={true}
        text={
          address !== '' ? address : '도로명, 지번, 영문 주소를 입력하세요.'
        }
        style={{ padding: 10 }}
        onPress={onSearchbar}
      />
      <TextInput
        placeholder="장소명을 입력해 주세요. - 예시) 잠실수영장"
        style={{ padding: 10, marginTop: -15 }}
        hideTitle
        onTextChange={setAlias}
      />
      <View style={{ flex: 1 }}>
        <NaverMap
          center={baseLocation}
          baseLocationChange={baseLocationChange}
          picker={picker}
          pickerChange={pickerChange}
        />
      </View>
      {/* <ButtomButtons
        TextLeft="이전"
        TextRight="선택 완료"
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
      /> */}
    </SafeAreaView>
  );
}
