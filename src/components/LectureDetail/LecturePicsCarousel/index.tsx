import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LecturePicsStyles as styles } from './styles';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import {
  lectureCommonSelectorFamily,
  LectureDetailPicsType,
  lectureModalState,
  lecutureModalSelectedIdxState,
} from '@/src/recoil/LectureStack';

const LecturePicsCarousel = () => {
  const [activeDotIdx, setActiveDotIdx] = useState(0);
  const setModalPics = useSetRecoilState(lectureModalState);
  const setSelectedIdx = useSetRecoilState(lecutureModalSelectedIdxState);
  const lecturePics = useRecoilValue(
    lectureCommonSelectorFamily('LecturePics'),
  );

  const windowWidth = useWindowDimensions().width;
  const viewabilityConfRef = useRef({
    viewAreayCoveragePercentThreshold: 50,
    minimumViewTime: 400,
    itemVisiblePercentThreshold: 10,
  });
  const viewableItemsCallbackRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length === 1) setActiveDotIdx(viewableItems[0].index);
  });

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item, index }) => (
          <Pressable
            key={item.url}
            onPress={() => {
              console.log('hey', index);

              setModalPics(lecturePics?._embedded?.lectureImageUrlList || []);
              setSelectedIdx(index);
            }}
          >
            <Image
              source={{ uri: item.url }}
              style={[
                styles.carouselImage,
                { width: windowWidth, resizeMode: 'cover' },
              ]}
            />
          </Pressable>
        )}
        data={
          lecturePics?._embedded?.lectureImageUrlList || [
            'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
          ]
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'center'}
        snapToInterval={windowWidth}
        decelerationRate={'fast'}
        viewabilityConfig={viewabilityConfRef.current}
        onViewableItemsChanged={viewableItemsCallbackRef.current}
      />
      <View style={styles.dotIndicatorContainer}>
        {lecturePics?._embedded?.lectureImageUrlList
          ? lecturePics._embedded.lectureImageUrlList.map(
              (_: LectureDetailPicsType, index: number) => (
                <View
                  style={
                    index === activeDotIdx
                      ? styles.dotIndicatorActive
                      : styles.dotIndicator
                  }
                />
              ),
            )
          : null}
      </View>
    </View>
  );
};

export default LecturePicsCarousel;
