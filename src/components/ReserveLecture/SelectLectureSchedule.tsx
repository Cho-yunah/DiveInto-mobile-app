import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SelectLectureSchedule as styles } from './styles';
import { useRecoilValue } from 'recoil';
import {
  currSelectedDateState,
  getTheSameClassScheduleState,
} from '@/src/recoil/LectureStack';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SelectLectureSchedule = () => {
  const currSelectedDate = useRecoilValue(currSelectedDateState);
  const getTheSameClassSchedulesArray = useRecoilValue(
    getTheSameClassScheduleState,
  );

  if (!currSelectedDate)
    return (
      <View style={styles.container}>
        <Text style={styles.date}>일정을 선택해 주세요.</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <View style={styles.dateWrapper}>
        <Text style={styles.date}>{currSelectedDate}</Text>
        <AntDesign name="caretdown" size={13} color={'#A9BBC9'} />
      </View>
      <ScrollView
        style={[styles.schedulesWrapper]}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {getTheSameClassSchedulesArray.length ? (
            <>
              <Text style={styles.classGuideText}>
                선택하신 날짜에 아래 {getTheSameClassSchedulesArray.length}일 간
                진행되는 강의가 있습니다.
              </Text>
              {getTheSameClassSchedulesArray.map(sch => {
                const conditionalBorderStyle = {
                  borderColor:
                    sch.currentNumber === sch.maxNumber ? '#CCD7DF' : '#A9BBC9',
                };
                const conditionalColorStyle = {
                  color:
                    sch.currentNumber === sch.maxNumber ? '#CCD7DF' : '#343434',
                };
                return (
                  <TouchableOpacity
                    style={[styles.schedule, conditionalBorderStyle]}
                    disabled={sch.currentNumber === sch.maxNumber}
                  >
                    <Text style={conditionalColorStyle}>{sch.date}</Text>
                    <Text style={conditionalColorStyle}>
                      {sch.startTime.split(':').slice(0, 2).join(':')}
                    </Text>
                    <Text style={conditionalColorStyle}>
                      {sch.currentNumber}명 / {sch.maxNumber}명
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </>
          ) : (
            <Text style={styles.date}>선택한 날짜에 일정이 없습니다.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectLectureSchedule;
