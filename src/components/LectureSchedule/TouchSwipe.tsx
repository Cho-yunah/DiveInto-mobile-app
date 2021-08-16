import React, { useCallback, useRef, useState } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRecoilCallback } from 'recoil';

import { TouchSwipeStyle as styles, CommonStyles } from './styles';
import { CommonListProps, RightSwipeProps } from './types';
import CommonModal from '@components/common/CommonModal';
import { getInstanceATK } from '@/src/lib/api/axios';
import { ReserveLectureCachingState } from '@/src/recoil/ProfileStack';

export default function TouchSwipe({
  imgComponent,
  contentsComponents,
  reservationId,
}: CommonListProps) {
  const swipeableRef = useRef<Swipeable | null>(null);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const onMoveLectureDetailView = () => {
    navigation.navigate('DetailReservation', { reservationId });
  };

  const onToggleShowModal = useCallback(() => {
    setShow(state => !state);
  }, []);

  const onCloseSwipeable = () => {
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  };

  const onDeleteNextLecture = useRecoilCallback(({ set }) => async () => {
    setShow(false);
    onCloseSwipeable();

    const instanceAtk = await getInstanceATK();

    try {
      await instanceAtk.delete(`/reservation/${reservationId}`);
      set(ReserveLectureCachingState, prev => prev + 1);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <TouchableOpacity onPress={onMoveLectureDetailView}>
      <Swipeable
        ref={swipeableRef}
        renderRightActions={(progress, dragX) => (
          <RightSwipe
            progress={progress}
            dragX={dragX}
            onPress={onToggleShowModal}
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
          toggleShowModal={onToggleShowModal}
          onClickConfirm={onDeleteNextLecture}
        />
      </Swipeable>
    </TouchableOpacity>
  );
}

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
