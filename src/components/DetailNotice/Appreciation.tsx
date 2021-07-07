import React from 'react';
import { View, Text } from 'react-native';

import { appreciationStyle as styles } from './styles';

export default function Appreciation() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLayout}>
        고객님들께 더 좋은 서비스를 제공하는 풍덩이 되겠습니다.
      </Text>
      <Text>감사합니다.</Text>
    </View>
  );
}
