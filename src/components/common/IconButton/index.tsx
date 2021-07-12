import React from 'react';
import {
  TouchableOpacity,
  Text,
  TextStyle,
  ViewStyle,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function JustIcon({
  name,
  size = 15,
  containerStyle,
  color = 'black',
}: {
  name: string;
  size?: number;
  containerStyle?: ViewStyle;
  color?: string;
}) {
  return (
    <View style={containerStyle}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
}

export default function IconButton({
  name,
  size = 15,
  onPress,
  containerStyle,
  color = 'black',
  disabled = false,
}: {
  name: string;
  size?: number;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  color?: string;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyle}
      disabled={disabled}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

export function IconTextButton({
  name,
  size = 15,
  text = 'test',
  onPress,
  fontStyle = { fontSize: 16, fontWeight: '600' },
  disabled = false,
}: {
  name: string;
  size?: number;
  text?: string;
  onPress?: () => void;
  fontStyle?: TextStyle;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      disabled={disabled}
    >
      <Ionicons name={name} size={size} style={{ marginRight: -7 }} />
      <Text style={{ ...fontStyle }}>{text}</Text>
    </TouchableOpacity>
  );
}
