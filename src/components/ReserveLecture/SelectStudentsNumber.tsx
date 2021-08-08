import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SelectStudentNumber as styles } from './styles';
import Entype from 'react-native-vector-icons/Entypo';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
  lectureCommonSelectorFamily,
  selectedClassByIdSelector,
  studentNumberState,
} from '@/src/recoil/LectureStack';
import addCashComma from '@/src/lib/utils/addCashComma';

const SelectStudentsNumber = () => {
  const [studentNumber, setStudentNumber] = useRecoilState(studentNumberState);
  const classScheduleState = useRecoilValue(selectedClassByIdSelector);
  const { contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('Info'),
  );
  const limitNumber =
    classScheduleState[0]?.maxNumber - classScheduleState[0]?.currentNumber;
  const increaseNumber = () => {
    if (limitNumber)
      setStudentNumber(num => (num >= limitNumber ? num : num + 1));
  };
  const decreaseNumber = () =>
    setStudentNumber(num => (num <= 1 ? 1 : num - 1));

  useEffect(() => {
    setStudentNumber(1); // 수업 일정 바뀔때마다 학생수 1로 변경
  }, [classScheduleState]);

  if (!classScheduleState.length)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>인원 선택</Text>

        <Text>수강 인원 선택을 위해서 일정을 선택해 주세요.</Text>
      </View>
    );
  else if (
    classScheduleState[0].maxNumber === classScheduleState[0].currentNumber
  )
    return (
      <View style={styles.container}>
        <Text style={styles.title}>인원 선택</Text>
        <Text>해당 일정의 수업은 만원입니다. 다른 일정을 선택해 주세요.</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>인원 선택</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.controllerBtnLeft}
            onPress={() => decreaseNumber()}
          >
            <Entype name="minus" size={20} color={'#207AB4'} />
          </TouchableOpacity>
          <Text>{studentNumber} 명</Text>
          <TouchableOpacity
            style={styles.controllerBtnRight}
            onPress={() => increaseNumber()}
          >
            <Entype name="plus" size={20} color={'#207AB4'} />
          </TouchableOpacity>
        </View>
        <Text>
          {contents ? addCashComma(contents.price * studentNumber) : 0}원
        </Text>
      </View>
    </View>
  );
};

export default SelectStudentsNumber;
