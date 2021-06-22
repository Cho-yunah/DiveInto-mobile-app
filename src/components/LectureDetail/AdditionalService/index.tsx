import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { AdditionalServiceStyles as styles } from './styles';

const serviceTags = [
  '주차가능',
  '그룹가능',
  '장비대여',
  '추가예약가능',
  '결석가능',
];

const AdditionalService = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>부가서비스</Text>
      <FlatList
        data={serviceTags}
        renderItem={({ item }) => (
          <View style={styles.serviceTag} key={item}>
            <Text style={styles.serviceTagText}>#{item}</Text>
          </View>
        )}
        horizontal
        contentContainerStyle={{
          marginTop: 14,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AdditionalService;
