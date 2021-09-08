import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SelectLectureSchedule as styles } from './styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currScheduleIdState,
  currSelectedDateState,
  getTheSameClassScheduleState,
} from '@recoil/Instructor/AllSchedule';
import Entype from 'react-native-vector-icons/Entypo';

import { ReservationInfoModal } from './ReservationInfoModal';

const SelectLectureSchedule = () => {
  const [visible, setVisible] = useState(false);

  const currSelectedDate = useRecoilValue(currSelectedDateState);
  const getTheSameClassSchedulesArray = useRecoilValue(
    getTheSameClassScheduleState,
  );
  const [currScheduleId, setCurrScheduleId] =
    useRecoilState(currScheduleIdState);

  useEffect(() => {
    setCurrScheduleId(null);
  }, [currSelectedDate]);

  if (!currSelectedDate)
    return (
      <View style={styles.container}>
        <Text style={styles.date}>일정을 선택해 주세요.</Text>
      </View>
    );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.dateWrapper}>
          <Text style={styles.date}>{currSelectedDate}</Text>
        </View>
        <View style={[styles.schedulesWrapper]}>
          <ScrollView
            style={{ flexWrap: 'wrap', flexDirection: 'row' }}
            showsHorizontalScrollIndicator={false}
          >
            {getTheSameClassSchedulesArray.length ? (
              <>
                <Text style={styles.classGuideText}>
                  선택하신 날짜에 {getTheSameClassSchedulesArray.length}개의
                  강의가 있습니다.
                </Text>
                <View style={{ alignItems: 'center' }}>
                  {getTheSameClassSchedulesArray.map(schedule => {
                    const conditionalBorderStyle = {
                      borderColor:
                        schedule[0].currentNumber === schedule[0].maxNumber
                          ? '#CCD7DF'
                          : '#A9BBC9',
                    };
                    const conditionalColorStyle = {
                      color:
                        schedule[0].currentNumber === schedule[0].maxNumber
                          ? '#CCD7DF'
                          : '#343434',
                    };
                    return (
                      <>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <Entype name="dot-single" size={20} />
                          {schedule[1]?.map(dateTime => (
                            <Pressable
                              key={dateTime.scheduleDateTimeId}
                              onPress={() => {
                                setCurrScheduleId(schedule[0].scheduleId);
                                setVisible(true);
                              }}
                              style={[
                                styles.schedule,
                                conditionalBorderStyle,
                                {
                                  backgroundColor:
                                    currScheduleId === schedule[0].scheduleId &&
                                    schedule[0].currentNumber !==
                                      schedule[0].maxNumber
                                      ? '#50CAD2'
                                      : '#fefefe',
                                },
                              ]}
                              disabled={
                                schedule[0].currentNumber ===
                                schedule[0].maxNumber
                              }
                            >
                              <Text style={conditionalColorStyle}>
                                {dateTime.date}
                              </Text>
                              <Text style={conditionalColorStyle}>
                                {dateTime?.startTime
                                  ?.split(':')
                                  .slice(0, 2)
                                  .join(':')}
                              </Text>
                              <Text style={conditionalColorStyle}>
                                {schedule[0].currentNumber}명 /{' '}
                                {schedule[0].maxNumber}명
                              </Text>
                            </Pressable>
                          ))}
                        </View>
                      </>
                    );
                  })}
                </View>
              </>
            ) : (
              <Text style={styles.date}>선택한 날짜에 일정이 없습니다.</Text>
            )}
          </ScrollView>
        </View>
      </View>
      <ReservationInfoModal
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  );
};

export default SelectLectureSchedule;
