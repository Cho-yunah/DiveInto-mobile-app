import React, { useLayoutEffect, useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import ApplyLecturerView from './ApplyLecturerView';
import useInputText from './useInputText';
import { ApplyLecturerProps } from '@navigators/ProfileStack/types';
import NextButton from '@components/common/NextButton';
import { getInstanceATK } from '@lib/api/axios';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  instructorImageCollectionState,
  WaitingCERTInstructorState,
} from '@recoil/ProfileStack';
import WaitingCERTInstructorView from './WaitingCERTInstructorView';

export default function ApplyLecturerScreen({
  navigation,
}: ApplyLecturerProps) {
  const [group, setGroup] = useState('');
  const [intro, onChangeIntro] = useInputText('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const picsArr = useRecoilValue(instructorImageCollectionState);
  const resetPicsArr = useResetRecoilState(instructorImageCollectionState);
  const [viewType, setViewType] = useRecoilState(WaitingCERTInstructorState);

  console.log(viewType);

  const applyInstructorInfo = async () => {
    const instanceAtk = await getInstanceATK();

    const instructorInfoBody = {
      organization: group,
      selfIntroduction: intro,
    };

    console.log(instructorInfoBody, 'instructorInfoBody');

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
      await instanceAtk.post('/sign/instructor/info', instructorInfoBody);

      await instanceAtk.post(
        '/sign/instructor/certificate',
        certificatePicsBody,
      );

      setViewType('done');
      navigation.navigate('ApplyLecturer');
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
    if (viewType === 'none') {
      navigation.setOptions({
        headerRight: () => (
          <NextButton
            onPress={applyInstructorInfo}
            text="완료"
            disable={isCompleted}
          />
        ),
      });
    } else {
      navigation.setOptions({
        headerRight: () => null,
        title: '강사 신청 대기중 ...',
      });
    }
  }, [isCompleted, viewType]);

  console.log(isCompleted, '모든 조건 만족');

  const conditionStyle = isLoading
    ? styles.loadingContainer
    : styles.basicContainer;

  return (
    <View style={conditionStyle}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#50CAD2" />
      ) : viewType === 'none' ? (
        <ApplyLecturerView
          intro={intro}
          onChange={onChangeIntro}
          setGroup={setGroup}
        />
      ) : (
        <WaitingCERTInstructorView />
      )}
    </View>
  );
}
