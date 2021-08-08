import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonModal from '../common/CommonModal';

import { TouchSwipeStyle as styles } from './styles';
import { TouchSwipeProps, RightSwipeProps } from './types';

export default function TouchSwipe({
  imgComponent,
  contentsComponents,
  type,
  reservationId,
}: TouchSwipeProps) {
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

  const onMoveWriteReiveView = () => {
    navigation.navigate('WriteReview', { reservationId });
  };

  const onMoveLectureDetailView = () => {
    navigation.navigate('DetailReservation', { reservationId });
  };

  const onDeleteLastLecture = useCallback(() => {
    setShow(false);
    console.log('이전 강의 삭제');
  }, []);

  const onDeleteNextLecture = useCallback(() => {
    setShow(false);
    console.log('예약한 강의 취소');
  }, []);

  const toggleShowModal = useCallback(() => {
    setShow(state => !state);
  }, []);

  const onDeleteLecture =
    type === 'last' ? onDeleteLastLecture : onDeleteNextLecture;

  const onMoveScreen =
    type === 'last' ? onMoveWriteReiveView : onMoveLectureDetailView;

  return (
    <TouchableOpacity onPress={onMoveScreen}>
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
          marginVertical: 12,
          // marginBottom: 12,
        }}
      >
        <View style={styles.container}>
          {imgComponent}
          {contentsComponents}
        </View>
        <CommonModal
          show={show}
          mode="output"
          desc="예약 취소하시겠습니까?"
          toggleShowModal={toggleShowModal}
          onClickConfirm={onDeleteLecture}
        />
      </Swipeable>
    </TouchableOpacity>
  );
}
