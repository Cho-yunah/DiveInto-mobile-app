import { ReviewCollectionProps } from '@/src/navigators/ProfileStack/types';
import React from 'react';
import { Text, View } from 'react-native';

export default function ReviewCollectionScreen({
  route,
}: ReviewCollectionProps) {
  console.log(route);

  return (
    <View>
      <Text>하이</Text>
    </View>
  );
}
