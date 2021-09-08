import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export const EachFilter = ({
  radioProps = [{ label: 'test' }],
  onDateSelect = () => {},
  seletedNum = 0,
}: {
  radioProps: { label: string }[];
  onDateSelect: (num: number) => void;
  seletedNum: number;
}) => {
  // const [selected, setSelected] = useState(0);
  const onPress = (num: number) => {
    // setSelected(num);
    onDateSelect(num);
  };
  return (
    <View style={stylesEachFilter.container}>
      {radioProps.map((obj, i) => (
        <RadioButton
          labelHorizontal
          key={i}
          style={stylesEachFilter.buttonContainer}
        >
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={i == seletedNum}
            onPress={onPress}
            borderWidth={2}
            buttonInnerColor="#2295FF"
            buttonOuterColor={seletedNum === i ? '#2196f3' : '#000'}
            buttonSize={20}
            buttonOuterSize={23}
            buttonStyle={{}}
            buttonWrapStyle={{}}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal
            onPress={onPress}
            labelStyle={{
              fontSize: 20,
              color: 'black',
            }}
            labelWrapStyle={{}}
          />
        </RadioButton>
      ))}
    </View>
  );
};
const stylesEachFilter = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 20,
    padding: 5,
    borderWidth: 0.3,
    borderRadius: 20,
    backgroundColor: '#F1F1F1',
  },
  buttonContainer: { margin: 10 },
});
