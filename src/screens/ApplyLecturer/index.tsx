import React, { useLayoutEffect, useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import { HeaderContainer } from '@/src/components/ProfileMain';
import {
  CommonInput,
  OrganizationDropdown,
  UploadCertificate,
} from '@/src/components/ApplyLecturer';
import useInputText from './useInputText';
import { ApplyLecturerProps } from '@navigators/ProfileStack/types';
import NextButton from '@components/common/NextButton';
import instance from '@lib/api/axios';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { atkState, instructorImageCollectionState } from '@recoil/ProfileStack';
import ProfileImg from '@components/ProfileMain/HeaderContainer/ProfileImg';

export default function ApplyLecturerScreen({
  navigation,
}: ApplyLecturerProps) {
  const [group, setGroup] = useState('');
  const [intro, onChangeIntro] = useInputText('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const atk = useRecoilValue(atkState);
  const picsArr = useRecoilValue(instructorImageCollectionState);
  const resetPicsArr = useResetRecoilState(instructorImageCollectionState);

  const onPress = async () => {
    const headers = {
      Authorization: atk,
    };

    const instructorInfoBody = {
      organization: group,
      selfIntroduction: intro,
    };

    const certificatePicsBody = new FormData();
    picsArr.forEach(pic => {
      certificatePicsBody.append('certificateImages', {
        name: pic.name,
        type: pic.type,
        uri: pic.uri,
      });
    });

    try {
      setIsLoading(true);

      await instance.post('/sign/instructor/info', instructorInfoBody, {
        headers,
      });

      await instance.post('/sign/instructor/certificate', certificatePicsBody, {
        headers,
      });

      navigation.navigate('ProfileMain');
    } catch (err) {
      console.log(err);
    }

    resetPicsArr();
    setIsLoading(false);
  };

  useEffect(() => {
    if (group && intro && picsArr.length === 3) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [group, intro, picsArr]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NextButton onPress={onPress} text="완료" disable={isCompleted} />
      ),
    });
  }, [isCompleted]);

  console.log(isCompleted, '모든 조건 만족');

  const conditionStyle = isLoading
    ? styles.loadingContainer
    : styles.basicContainer;

  const ApplyLecturerView = (
    <>
      <HeaderContainer currScreen="lecturer" buttonText="프로필사진추가" />
      <CommonInput
        placeholderText="강사소개글"
        topBlank
        value={intro}
        handleInputText={onChangeIntro}
      />
      <OrganizationDropdown setGroup={setGroup} />
      <UploadCertificate />
    </>
  );

  return (
    <View style={conditionStyle}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#50CAD2" />
      ) : (
        ApplyLecturerView
      )}
    </View>
  );
}
