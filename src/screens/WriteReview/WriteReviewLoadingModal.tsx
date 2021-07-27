import { isModalOpenState } from '@/src/recoil/ProfileStack';
import React from 'react';
import { ActivityIndicator, useWindowDimensions } from 'react-native';
import { Modal, SafeAreaView, Text } from 'react-native';
import { useRecoilValue } from 'recoil';

const WriteReviewLoadingModal = () => {
  const isModalOpen = useRecoilValue(isModalOpenState);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'fade'}>
        <SafeAreaView
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <ActivityIndicator size="large" color="white" />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default WriteReviewLoadingModal;
