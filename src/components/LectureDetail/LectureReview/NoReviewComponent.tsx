import React from 'react';
import { Text, View } from 'react-native';

const NoReviewComponent = () => {
  return (
    <View
      style={{
        height: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>작성된 리뷰가 없습니다.</Text>
    </View>
  );
};

export default NoReviewComponent;
