import { lectureCommonSelectorFamily } from '@/src/recoil/LectureStack';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useRecoilValueLoadable } from 'recoil';
import { AdditionalServiceStyles as styles } from './styles';

const AdditionalService = () => {
  const { state, contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('Info'),
  );
  const windowWidth = useWindowDimensions().width;

  if (state === 'loading')
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={windowWidth} height={30} />
      </SkeletonPlaceholder>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>부가서비스</Text>
      <ScrollView
        style={{
          marginTop: 14,
          flex: 1,
          width: windowWidth,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {contents.serviceTags.map((tag: string) => (
            <View style={styles.serviceTag} key={tag}>
              <Text style={styles.serviceTagText}>#{tag}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AdditionalService;
