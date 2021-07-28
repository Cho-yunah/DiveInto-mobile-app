import { lectureCommonSelectorFamily } from '@/src/recoil/LectureStack';
import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { AdditionalServiceStyles as styles } from './styles';

const AdditionalService = () => {
  const lectureInfo = useRecoilValue(lectureCommonSelectorFamily('Info'));
  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    console.log(lectureInfo, '*&*&*&*&*&*&*');
  }, [lectureInfo]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>부가서비스</Text>
      <View style={{ marginTop: 14, flexDirection: 'row', flexWrap: 'wrap' }}>
        {lectureInfo?.serviceTags &&
          lectureInfo.serviceTags?.map((tag: string) => (
            <View style={styles.serviceTag} key={tag}>
              <Text style={styles.serviceTagText}>#{tag}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default AdditionalService;
