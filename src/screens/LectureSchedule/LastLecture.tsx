import React from 'react';
import { View, FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './styles';
import { LectureImg, LectureContents } from '@components/LectureSchedule';
import { getLectureScheduleListSelector } from '@/src/recoil/ProfileStack/dataFetch';
import CommonEmptyView from '@components/common/CommonEmptyView';
import LastLectureSchedule from '@components/LectureSchedule/LastLectureSchedule';
import withSuspense from '@/src/lib/HOC/withSuspense';
function LastLectureScreen() {
  const reservationList = useRecoilValue(
    getLectureScheduleListSelector('last'),
  );

  if (reservationList.length === 0) {
    return (
      <View style={styles.eachScreenContainerStyle}>
        <CommonEmptyView
          guideText="지난 강의가 없습니다."
          buttonText="강의 둘러보기"
          moveViewName="ProfileMain"
        />
      </View>
    );
  }

  return (
    <View style={styles.eachScreenContainerStyle}>
      <FlatList
        data={reservationList}
        renderItem={({ item }) => {
          return (
            <LastLectureSchedule
              imgComponent={<LectureImg img={item.lectureImageUrl} />}
              contentsComponents={
                <LectureContents
                  title={item.lectureTitle}
                  level={item.level}
                  group={item.organization}
                  reservationDate={item.reservationDate}
                  nickname={item.instructorNickname}
                  lectureType="last"
                />
              }
              reservationId={item.reservationId}
            ></LastLectureSchedule>
          );
        }}
        keyExtractor={item => String(item.reservationId)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default withSuspense(LastLectureScreen);

//   const ListEl = reservationList ? (
//     reservationList.length !== 0 ? (
//       <FlatList
//         data={reservationList}
//         renderItem={({ item }) => {
//           return (
//             <LastLectureSchedule
//               imgComponent={<LectureImg img={item.lectureImageUrl} />}
//               contentsComponents={
//                 <LectureContents
//                   title={item.lectureTitle}
//                   level={item.level}
//                   group={item.organization}
//                   reservationDate={item.reservationDate}
//                   nickname={item.instructorNickname}
//                   lectureType="last"
//                 />
//               }
//               reservationId={item.reservationId}
//             ></LastLectureSchedule>
//           );
//         }}
//         keyExtractor={item => String(item.reservationId)}
//         showsVerticalScrollIndicator={false}
//       />
//     ) : (

//     )
//   ) : (
//     <CommonLoading />
//   );

//   return <View style={styles.eachScreenContainerStyle}>{ListEl}</View>;
// }
