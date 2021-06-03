import React, { useRef, useState } from 'react';
import { FlatList, Image, useWindowDimensions, View } from 'react-native';
import { LecturePicsStyles as styles } from './styles';

const tempDataArr = [
  'https://aquazealots.com/wp-content/uploads/2019/11/best-freediving-spots-in-the-world-1.jpeg',
  'https://i1.wp.com/crystalfreediving.com/wp-content/uploads/2015/04/freediving4-001.jpg?resize=830%2C374&ssl=1',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWNVl3M4oqxlcjCXhij_QjQmLcRM9Sna-lA&usqp=CAU',
];

const LecturePicsCarousel = () => {
  const [activeDotIdx, setActiveDotIdx] = useState(0);
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
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: item }}
                style={[styles.carouselImage, { width: windowWidth }]}
              />
            </View>
          );
        }}
        data={tempDataArr}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'center'}
        snapToInterval={windowWidth}
        decelerationRate={'fast'}
        viewabilityConfig={viewabilityConfRef.current}
        onViewableItemsChanged={viewableItemsCallbackRef.current}
      />
      <View style={styles.dotIndicatorContainer}>
        {tempDataArr.map((_, index) => (
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
