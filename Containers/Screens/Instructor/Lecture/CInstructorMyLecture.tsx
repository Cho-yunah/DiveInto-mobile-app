import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import TagList from '@pCommon/Tags';
import { instructorMyLectureAPI } from '@api/Lecture';

export default function CInstructorMyLecture(): React.ReactElement {
  const [lectures, setLectures] = useState([]);
  const compos = [];
  useEffect(() => {
    const fetch = async () => {
      const res = await instructorMyLectureAPI(0, 5);
      setLectures(res);
      console.log(res);
    };
    fetch();
  }, []);

  lectures.forEach(lectureInfo => {
    compos.push(<Lecture lectureInfo={lectureInfo} />);
  });

  return <View style={{ flex: 1, backgroundColor: 'white' }}>{compos}</View>;
}

const Lecture = ({ lectureInfo }) => {
  return (
    <View style={{ padding: 10, borderWidth: 1, borderRadius: 20, margin: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: 'bold',
        }}
      >
        {lectureInfo.title}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TagList
          tags={[
            lectureInfo.groupName,
            lectureInfo.certificateKind,
            lectureInfo.isRentEquipment && '장비대여',
          ]}
        />
      </View>
      <Text style={{ fontSize: 20, padding: 5 }}>{`₩${lectureInfo.cost}`}</Text>
      {/* <Text>{lectureInfo.lectureId}</Text> */}
      <Text
        style={{ textAlign: 'right' }}
      >{`${lectureInfo.upcomingScheduleCount}개의 다가오는 일정이 있습니다.`}</Text>
    </View>
  );
};
