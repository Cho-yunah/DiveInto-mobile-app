import React, { useState } from 'react';
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
const heartIcon = require('@assets/heart-mind.png');

type NewLectureProp = {
  title: string;
  organization: 'AIDA' | 'PADI' | 'SSI';
  level: 'level1' | 'level2' | 'level3' | 'level4' | 'level5';
  region: string;
  maxNumber: number;
  lectureTime: number;
  equipmentNames: string[];
};
const NewLecture = ({
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'level1',
  region = '서울',
  maxNumber = 4,
  lectureTime = 8,
  equipmentNames = ['아쿠아슈즈', '잠수복'],
}: NewLectureProp) => {
  const [heart, setHeart] = useState(false);

  return (
    <View style={[styles2.lectureContainer, styles2.shadow]}>
      <Image
        source={require('@assets/lecture1.jpg')}
        style={{ flex: 1, width: '100%' }}
      />
      <View style={heart ? styles2.heartOn : styles2.heartOff}>
        <TouchableOpacity onPress={() => setHeart(!heart)}>
          <Image source={heartIcon} style={styles2.heartImage} />
        </TouchableOpacity>
      </View>
      <View style={{ height: 80 }}>
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
      </View>
    </View>
  );
};

export default function NewLectures() {
  return (
    <View style={[styles.headerContainer, styles2.header]}>
      <View style={styles2.newLectureContainer}>
        <Text style={styles2.title}>새로운 강의</Text>
        <TouchableOpacity>
          <Text style={styles2.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
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
    marginRight: 10,
    width: 218,
    height: 200,
    backgroundColor: Color.White,
    borderRadius: 20,
    overflow: 'hidden',
  },
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
  heartImage: { width: 30, height: 30 },
  heartOn: {
    position: 'absolute',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: 'red',
  },
  heartOff: {
    position: 'absolute',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: 'grey',
  },
});
