import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { UploadProgress as styles } from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ProgressBar from './ProgressBar';

export default function ProgressComponent({
  title,
  isCompleted,
  written,
  total,
  percent,
}: {
  title: string;
  isCompleted: boolean | null;
  written: number;
  total: number;
  percent: number;
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {/* 제목,용량 */}
        <View style={{ flex: 1 }}>
          <Text style={styles.fileName}>{title}</Text>
          <Text style={styles.uploadSize}>
            {isCompleted === null
              ? `${written}bytes / ${total}bytes`
              : isCompleted
              ? '업로드 완료'
              : '업로드 실패'}
          </Text>
        </View>
        {/* 버튼 */}
        <Button
          isCompleted={isCompleted}
          onClosePress={() => {}}
          onRemovePress={() => {}}
        />
      </View>
      {/* 프로그레스바 */}
      <ProgressBar progress={percent} backgroundColor="#FEFEFE" />
    </View>
  );
}

const Button = ({
  isCompleted,
  onClosePress,
  onRemovePress,
}: {
  isCompleted: null | boolean;
  onClosePress: () => void;
  onRemovePress: () => void;
}) => (
  <TouchableOpacity
    activeOpacity={0.3}
    style={isCompleted && styles.iconButton}
    onPress={isCompleted ? onRemovePress : onClosePress}
  >
    {isCompleted ? (
      <FontAwesome5 name="trash" size={20} color="#7976DA" />
    ) : (
      <Ionicons name="close" size={30} color="#929292" />
    )}
  </TouchableOpacity>
);
