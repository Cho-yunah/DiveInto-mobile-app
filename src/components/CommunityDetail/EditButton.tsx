import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function EditButton({text, style, onPress}) {
  return (
    <TouchableOpacity>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  )
}

