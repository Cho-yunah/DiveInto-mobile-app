import {
  lectureModalState,
  lecutureModalSelectedIdxState,
} from '@/src/recoil/LectureStack';
import React, { useEffect, useRef } from 'react';
import { useWindowDimensions, Modal, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilState } from 'recoil';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-animatable';
import styles from './styles';

const LeturePicsModal = () => {
  const [modalPics, setModalPics] = useRecoilState(lectureModalState);
  const [selectedPicIdx, setSelectedPicIdx] = useRecoilState(
    lecutureModalSelectedIdxState,
  );
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const viewabilityConfRef = useRef({
    viewAreayCoveragePercentThreshold: 50,
    minimumViewTime: 400,
    itemVisiblePercentThreshold: 10,
  });
  const viewableItemsCallbackRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length === 1) {
      setSelectedPicIdx(viewableItems[0].index);
    }
  });

  useEffect(() => {
    return () => {
      setModalPics([]);
      setSelectedPicIdx(0);
    };
  }, []);

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
          data={modalPics}
          keyExtractor={item => item.url}
          horizontal
          initialScrollIndex={selectedPicIdx}
          onScrollToIndexFailed={() => {}}
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
