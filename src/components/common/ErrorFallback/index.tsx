import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FallbackProps } from 'react-error-boundary';

import { styles } from './styles';

export default function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>서버 접속 오류</Text>
      <View style={styles.infoLayout}>
        <Text style={styles.infoText}>서버 연결에 실패하엿습니다.</Text>
        <Text style={styles.infoText}>잠시 후 재시도 해주세요.</Text>
      </View>
      <TouchableOpacity
        onPress={resetErrorBoundary}
        style={styles.buttonLayout}
      >
        <Text style={styles.buttonText}>이전 페이지로 이동</Text>
      </TouchableOpacity>
    </View>
  );
}
