import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';

import LectureCalendar from '@legacy_cCommon/LectureCalendar';
import TimeSelectorContainer from '@legacy_cCommon/TimeSelector';

/**
 *
 * @view 일정 추가 뷰 (달력, 시간, 위치)
 */
export default function PLectureScheduleAdd({ selectedScheduleArray, func }) {
  return (
    <SafeAreaView style={styles3.SafeAreaView}>
      <ScrollView>
        {/* 달력 */}
        <LectureCalendar onDateSelct={func.onDateSelct} />

        {/* 시간 지정 */}
        {selectedScheduleArray.length !== 0 ? (
          <>
            {/* 시간 지정 */}
            <View style={styles3.container}>
              <TimeSelectorContainer
                onSelectTime={func.onSelectTime}
                onScheduleObjChange={func.onScheduleObjChange}
                schedules={selectedScheduleArray}
                onDateIndexChange={func.onDateIndexChange}
              />
            </View>
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles3 = StyleSheet.create({
  SafeAreaView: { backgroundColor: 'white', flex: 1 },
  container: {
    borderTopWidth: 1,
    borderColor: 'darkgrey',
    paddingTop: 10,
    paddingBottom: 20,
  },
});
