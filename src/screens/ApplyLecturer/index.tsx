import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import ApplyLecturerView from './ApplyLecturerView';
import useInputText from './useInputText';
import { ApplyLecturerProps } from '@navigators/ProfileStack/types';
import NextButton from '@components/common/NextButton';
import { getInstanceATK } from '@lib/api/axios';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { instructorImageCollectionState } from '@recoil/ProfileStack/store';
import WaitingCERTInstructorView from './WaitingCERTInstructorView';
import { getIsApplyInsctructorSelector } from '@/src/recoil/ProfileStack/dataFetch';
import withSuspense from '@/src/lib/HOC/withSuspense';

function ApplyLecturerScreen({ navigation }: ApplyLecturerProps) {
  const [group, setGroup] = useState('');
  const [intro, onChangeIntro] = useInputText('');
  const [isCompleted, setIsCompleted] = useState(false);
  const picsArr = useRecoilValue(instructorImageCollectionState);
  const resetPicsArr = useResetRecoilState(instructorImageCollectionState);
  const isValidInstructor = useRecoilValue(getIsApplyInsctructorSelector);

  const applyInstructorInfo = async () => {
    const instanceAtk = await getInstanceATK();

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
  };

  useEffect(() => {
    if (group && intro && picsArr.length === 3) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [group, intro, picsArr]);

  useLayoutEffect(() => {
    if (isValidInstructor) {
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
  }, [isCompleted, isValidInstructor]);

  console.log(isCompleted, '모든 조건 만족');

  if (isValidInstructor) {
    return (
      <View style={styles.loadingContainer}>
        <WaitingCERTInstructorView />
      </View>
    );
  }

  return (
    <View style={styles.basicContainer}>
      <ApplyLecturerView
        intro={intro}
        onChange={onChangeIntro}
        setGroup={setGroup}
      />
    </View>
  );
}

export default withSuspense(ApplyLecturerScreen);
