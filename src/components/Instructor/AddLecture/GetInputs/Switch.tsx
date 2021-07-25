import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as color from '@config/colors';

export function Switch({
  buttonText1,
  buttonText2,
  onPress,
  initState = 0,
}: {
  buttonText1: string;
  buttonText2: string;
  onPress?: (idx: 0 | 1) => void;
  initState?: 0 | 1;
}) {
  const [selected, setSelected] = useState<0 | 1>(initState);
  const onSwitchPress = (num: 0 | 1) => setSelected(num);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[styles.button, styles.shadow, selected === 0 && styles.seleted]}
        onPress={() => {
          onSwitchPress(0);
          onPress && onPress(0);
        }}
      >
        <Text>{buttonText1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.shadow, selected === 1 && styles.seleted]}
        onPress={() => {
          onSwitchPress(1);
          onPress && onPress(1);
        }}
      >
        <Text>{buttonText2}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    // backgroundColor: 'white',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  seleted: {
    // borderWidth: 1,
    backgroundColor: color.PointBlue,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 3,
  },
});
