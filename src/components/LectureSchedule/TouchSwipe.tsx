import React, { useCallback, useState } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { TouchSwipeStyle as styles, CommonStyles } from './styles';
import { CommonListProps, RightSwipeProps } from './types';
import CommonModal from '@components/common/CommonModal';
import { getInstanceATK } from '@/src/lib/api/axios';

export default function TouchSwipe({
  imgComponent,
  contentsComponents,
  reservationId,
}: CommonListProps) {
  // const [show, setShow] = useReserveCancel(type);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const RightSwipe = ({ progress, dragX, onPress }: RightSwipeProps) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity style={styles.deleteBottonContainer} onPress={onPress}>
        <Animated.View style={[styles.deleteBox, { transform: [{ scale }] }]}>
          <FontAwesome name="trash" color="#FEFEFE" size={25} />
          <Text style={styles.textStyle}>취소</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const onMoveLectureDetailView = () => {
    navigation.navigate('DetailReservation', { reservationId });
  };

  const onDeleteNextLecture = useCallback(() => {
    setShow(false);

    const requestReserveCancel = async () => {
      console.log(reservationId);

      const instanceAtk = await getInstanceATK();

      try {
        const res = await instanceAtk.delete(`/reservation/${reservationId}`);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    requestReserveCancel();
    console.log('예약한 강의 취소');
  }, []);

  const toggleShowModal = useCallback(() => {
    setShow(state => !state);
  }, []);

  return (
    <TouchableOpacity onPress={onMoveLectureDetailView}>
      <Swipeable
        renderRightActions={(progress, dragX) => (
          <RightSwipe
            progress={progress}
            dragX={dragX}
            onPress={toggleShowModal}
          />
        )}
        overshootFriction={30}
        containerStyle={{
          borderRadius: 10,
          marginBottom: 12,
        }}
      >
        <View style={CommonStyles.listContainer}>
          {imgComponent}
          {contentsComponents}
        </View>
        <CommonModal
          show={show}
          mode="output"
          desc="예약 취소하시겠습니까?"
          toggleShowModal={toggleShowModal}
          onClickConfirm={onDeleteNextLecture}
        />
      </Swipeable>
    </TouchableOpacity>
  );
}
