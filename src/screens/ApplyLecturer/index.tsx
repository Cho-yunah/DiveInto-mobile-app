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
  const [validInstructor, setValidInstructor] = useState(false);
  // const [viewType, setViewType] = useRecoilState(WaitingCERTInstructorState);

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

      navigation.navigate('ApplyLecturer');
    } catch (err) {
      console.log(err);
    }

    resetPicsArr();
    setIsLoading(false);
  };

  useEffect(() => {
    const validApplyInstructor = async () => {
      const instanceAtk = await getInstanceATK();

      try {
        setIsLoading(true);
        const { data } = await instanceAtk.get(
          '/account/instructor-application',
        );
        console.log(data);

        setValidInstructor(data.applied);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    validApplyInstructor();
  }, []);

  useEffect(() => {
    if (group && intro && picsArr.length === 3) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [group, intro, picsArr]);

  useLayoutEffect(() => {
    if (validInstructor) {
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
        title: '강사 신청 대기중 ...',
        headerRight: () => null,
      });
    }
  }, [isCompleted, validInstructor]);

  const conditionStyle = isLoading
    ? styles.loadingContainer
    : styles.basicContainer;

  console.log(isCompleted, '모든 조건 만족');

  return (
    <View style={conditionStyle}>
      {isLoading ? null : !validInstructor ? ( // <ActivityIndicator size="large" color="#50CAD2" />
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
