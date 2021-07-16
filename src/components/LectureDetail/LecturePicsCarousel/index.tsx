import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
  View,
} from 'react-native';
import { LecturePicsStyles as styles } from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import useRequestLecturePics from './useRequestLecturePics';
import { useSetRecoilState } from 'recoil';
import {
  lectureModalState,
  lecutureModalSelectedIdxState,
} from '@/src/recoil/LectureStack';

const LecturePicsCarousel = () => {
  const [activeDotIdx, setActiveDotIdx] = useState(0);
  const setModalPics = useSetRecoilState(lectureModalState);
  const setSelectedIdx = useSetRecoilState(lecutureModalSelectedIdxState);
  const lecturePics = useRequestLecturePics();
  const windowWidth = useWindowDimensions().width;
  const viewabilityConfRef = useRef({
    viewAreayCoveragePercentThreshold: 50,
    minimumViewTime: 400,
    itemVisiblePercentThreshold: 10,
  });
  const viewableItemsCallbackRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length === 1) setActiveDotIdx(viewableItems[0].index);
  });

  if (!lecturePics.length)
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={windowWidth} height={195} />
      </SkeletonPlaceholder>
    );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item, index }) => (
          <Pressable
            key={item.url}
            onPress={() => {
              console.log('hey', index);

              setModalPics(lecturePics);
              setSelectedIdx(index);
            }}
          >
            <Image
              source={{ uri: item.url }}
              style={[styles.carouselImage, { width: windowWidth }]}
            />
          </Pressable>
        )}
        data={lecturePics}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'center'}
        snapToInterval={windowWidth}
        decelerationRate={'fast'}
        viewabilityConfig={viewabilityConfRef.current}
        onViewableItemsChanged={viewableItemsCallbackRef.current}
      />
      <View style={styles.dotIndicatorContainer}>
        {lecturePics.map((_, index) => (
          <View
            style={
              index === activeDotIdx
                ? styles.dotIndicatorActive
                : styles.dotIndicator
            }
          />
        ))}
      </View>
    </View>
  );
};

export default LecturePicsCarousel;
