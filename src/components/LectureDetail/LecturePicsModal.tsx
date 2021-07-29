import {
  lectureModalState,
  lecutureModalSelectedIdxState,
} from '@/src/recoil/LectureStack';
import React, { Ref, useEffect, useRef, useState } from 'react';
import {
  useWindowDimensions,
  Modal,
  Text,
  ScrollView,
  FlatListProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState } from 'recoil';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-animatable';
import styles from './styles';
import { scrollTo } from 'react-native-reanimated';

const LeturePicsModal = () => {
  const [modalPics, setModalPics] = useRecoilState(lectureModalState);
  const [selectedPicIdx, setSelectedPicIdx] = useRecoilState(
    lecutureModalSelectedIdxState,
  );
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const viewabilityConfRef = useRef({
    viewAreayCoveragePercentThreshold: 50,
    minimumViewTime: 400,
    itemVisiblePercentThreshold: 100,
  });
  const viewableItemsCallbackRef = useRef(({ viewableItems }: any) => {
    console.log(viewableItems);
    console.log(selectedPicIdx);

    if (viewableItems.length) {
      setSelectedPicIdx(viewableItems[0].index);
    }
  });
  const flatListRef = useRef<any>(null);

  if (!modalPics.length) return null;

  return (
    <Modal animationType={'slide'}>
      <SafeAreaView
        style={[styles.modalOuterContainer, { height: windowHeight }]}
      >
        <AntDesign
          name="close"
          size={20}
          color="#fefefe"
          onPress={() => setModalPics([])}
          style={styles.modalCloseIcon}
        />
        <FlatList
          ref={flatListRef}
          data={modalPics}
          keyExtractor={item => item.url}
          horizontal
          initialScrollIndex={selectedPicIdx}
          onScrollToIndexFailed={failInfo => {
            console.log(failInfo);
            const wait = new Promise(resolve => setTimeout(resolve, 10));
            wait.then(() => {
              flatListRef.current?.scrollToIndex({
                index: failInfo.index,
                animated: false,
              });
            });
          }}
          snapToAlignment={'center'}
          snapToInterval={windowWidth}
          decelerationRate={'fast'}
          viewabilityConfig={viewabilityConfRef.current}
          onViewableItemsChanged={viewableItemsCallbackRef.current}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.url }}
              style={{ width: windowWidth, height: 220 }}
            />
          )}
          contentContainerStyle={{
            alignItems: 'center',
          }}
        />
        <Text style={styles.modalText}>
          {selectedPicIdx + 1} / {modalPics.length}
        </Text>
      </SafeAreaView>
    </Modal>
  );
};

export default LeturePicsModal;
