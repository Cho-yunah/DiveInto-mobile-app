import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from './styles';

import * as Color from '@config/colors';

import Location from '@assets/Location.svg';
import Person from '@assets/Person.svg';
import Time from '@assets/Time.svg';
import Plus from '@assets/Plus.svg';
import Star from '@assets/Star.svg';

type NewLectureProp = {
  title: string;
  organization: 'AIDA' | 'PADI' | 'SSI';
  level: 'level1' | 'level2' | 'level3' | 'level4' | 'level5';
  region: string;
  maxNumber: number;
  lectureTime: number;
  equipmentNames: string[];
  reviewAvg: number;
  reviewCount: number;
};
const NewLecture = ({
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'level1',
  region = '서울',
  maxNumber = 4,
  lectureTime = 8,
  equipmentNames = ['아쿠아슈즈', '잠수복'],
  reviewAvg = 4.5,
  reviewCount = 56,
}: NewLectureProp) => (
  <View style={[styles2.lectureContainer, styles2.row, styles2.shadow]}>
    {/* <View style={{ flex: 1 }}> */}
    <Image
      source={require('@assets/lecture1.jpg')}
      style={{ width: '40%', height: '100%', resizeMode: 'contain' }}
    />
    {/* </View> */}
    <View style={{ flex: 1, height: 80 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 10 }}>{title}</Text>
        <Text>{organization}</Text>
        <Text>{level}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Location />
        <Text style={{ marginRight: 10 }}>{region}</Text>
        <Person />
        <Text>{maxNumber}</Text>
        <Time />
        <Text>{lectureTime}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Plus />
        <Text style={{ marginRight: 10 }}>{equipmentNames}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Star />
        <Text
          style={{ marginRight: 10 }}
        >{`${reviewAvg}점 (${reviewCount}건의 평가)`}</Text>
      </View>
    </View>
  </View>
);

export default function PopularLectures() {
  return (
    <View style={[styles.headerContainer, styles2.header]}>
      <View style={styles2.newLectureContainer}>
        <Text style={styles2.title}>인기 강의</Text>
        <TouchableOpacity>
          <Text style={styles2.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <NewLecture />
        <NewLecture />
        <NewLecture />
        <NewLecture />
        <NewLecture />
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  header: { marginTop: 40, flex: 1 },
  newLectureContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: '600', flex: 1, marginBottom: 8 },
  more: {
    color: Color.deepBlue,
    fontSize: 14,
    fontWeight: '600',
  },
  lectureContainer: {
    height: 120,
    backgroundColor: Color.White,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  row: { flexDirection: 'row' },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
