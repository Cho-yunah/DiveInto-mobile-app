import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View } from 'react-native';

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
import { useRecoilValue } from 'recoil';
import { atkState } from '@recoil/ProfileStack';
import ProfileImg from '@components/ProfileMain/HeaderContainer/ProfileImg';

export default function ApplyLecturerScreen({
  navigation,
}: ApplyLecturerProps) {
  const [group, setGroup] = useState('');
  const [intro, onChangeIntro] = useInputText('');
  const [isCompleted, setIsCompleted] = useState(false);
  const atk = useRecoilValue(atkState);

  const onPress = async () => {
    const headers = {
      Authorization: atk,
    };

    const body = {
      organization: group,
      selfIntroduction: intro,
    };

    try {
      await instance.post('/sign/instructor/info', body, {
        headers,
      });

      navigation.navigate('ProfileMain');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (group && intro) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [group, intro]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NextButton onPress={onPress} text="완료" disable={isCompleted} />
      ),
    });
  }, [isCompleted]);

  return (
    <View style={styles.container}>
      <HeaderContainer currScreen="lecturer" buttonText="프로필사진추가" />
      <CommonInput
        placeholderText="강사소개글"
        topBlank
        value={intro}
        handleInputText={onChangeIntro}
      />
      <OrganizationDropdown setGroup={setGroup} />
      <UploadCertificate />
    </View>
  );
}
