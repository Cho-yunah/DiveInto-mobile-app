import React, { useState } from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';

import { Selected, UnSelected } from '@config/colors';
import HeartIcon from '@assets/Heart.svg';

export default function Heart({
  containerStyle,
}: {
  containerStyle?: ViewStyle;
}) {
  const [heart, setHeart] = useState(false);

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={() => setHeart(!heart)}>
        <HeartIcon
          width={20}
          height={20}
          style={heart ? { color: Selected } : { color: UnSelected }}
        />
      </TouchableOpacity>
    </View>
  );
}
