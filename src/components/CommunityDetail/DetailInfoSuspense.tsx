import React from 'react'
import { Image, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { DetailInfoStyle as styles } from './styles';

const DetailInfoSuspence =()=> {
  return (
    <View>
      <View style={styles.writerInfoBox}>
          <View style={styles.writerImage}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item width={20} height={20} />
            </SkeletonPlaceholder>
          </View>
        
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.dateStyle}>{writer.nickName}</Text>
        </View>
      </View>
    </View>
  );

  }