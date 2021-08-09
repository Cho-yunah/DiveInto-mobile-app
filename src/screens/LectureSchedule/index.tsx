import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { styles } from './styles';
import NextLectureScreen from './NextLecture';
import LastLectureScreen from './LastLecture';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  atkState,
  reservationLectureListState,
} from '@/src/recoil/ProfileStack';
import instance, { getInstanceATK } from '@/src/lib/api/axios';

const Tab = createMaterialTopTabNavigator();
export default function LectureScheduleScreen() {
  const atk = useRecoilValue(atkState);
  const setReservationLectureList = useSetRecoilState(
    reservationLectureListState,
  );

  useEffect(() => {
    const getData = async () => {
      const instanceAtk = await getInstanceATK();

      try {
        const { data } = await instanceAtk.get(
          '/reservation/list?page=0&size=15&sort=dateOfReservation,DESC',
        );

        console.log(data);

        setReservationLectureList(data._embedded.reservationInfoList);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [atk]);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 18 },
          activeTintColor: '#50CAD2',
          inactiveTintColor: '#6A6D70',
          indicatorStyle: {
            borderColor: '#50CAD2',
            borderWidth: 1,
          },
        }}
      >
        <Tab.Screen
          name="NextLecture"
          component={NextLectureScreen}
          options={{ title: '다음 강의' }}
        />
        <Tab.Screen
          name="LastLecture"
          component={LastLectureScreen}
          options={{ title: '지난 강의' }}
        />
      </Tab.Navigator>
    </View>
  );
}
