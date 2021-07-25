import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { multiImageSelect } from '@lib/file';
import { DocumentPickerResponse } from 'react-native-document-picker';
export function GetImages({
  onSelect,
}: {
  onSelect?: (images: DocumentPickerResponse[]) => void;
}) {
  const [image, setImage] = useState('');

  const onPress = async () => {
    const res = await multiImageSelect();
    res && setImage(res[0].uri);
    res && onSelect && onSelect(res);
  };

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow]}
      activeOpacity={0.7}
      onPress={async () => {
        await onPress();
        console.log('pressed');
      }}
    >
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      ) : (
        <Text style={styles.plus}>+</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: { fontSize: 50, fontWeight: '300', color: 'grey' },
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
