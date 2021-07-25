import React from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView, Text, View } from 'react-native';
import { AdditionalServiceStyles as styles } from './styles';
const serviceTags = [
  '주차가능',
  '그룹가능',
  '장비대여',
  '추가예약가능',
  '결석가능',
];

const AdditionalService = () => {
  const windowWidth = useWindowDimensions().width;
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
          {serviceTags.map(tag => (
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
