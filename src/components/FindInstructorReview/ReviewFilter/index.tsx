import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function ReviewFilter({ sortBy, setSortBy }: any) {
  return (
    <View style={styles.orderBySelectorsContainer}>
      <TouchableOpacity
        style={
          sortBy === 'writeDate,DESC'
            ? styles.orderBySelectorBtnActive
            : styles.orderBySelectorBtn
        }
        onPress={() => setSortBy('writeDate,DESC')}
      >
        <Text style={sortBy === 'writeDate,DESC' ? { color: 'white' } : {}}>
          최신순
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          sortBy === 'totalStarAvg,ASC'
            ? styles.orderBySelectorBtnActive
            : styles.orderBySelectorBtn
        }
        onPress={() => setSortBy('totalStarAvg,ASC')}
      >
        <Text style={sortBy === 'totalStarAvg,ASC' ? { color: 'white' } : {}}>
          낮은평순
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          sortBy === 'totalStarAvg,DESC'
            ? styles.orderBySelectorBtnActive
            : styles.orderBySelectorBtn
        }
        onPress={() => setSortBy('totalStarAvg,DESC')}
      >
        <Text style={sortBy === 'totalStarAvg,DESC' ? { color: 'white' } : {}}>
          높은평순
        </Text>
      </TouchableOpacity>
    </View>
  );
}
