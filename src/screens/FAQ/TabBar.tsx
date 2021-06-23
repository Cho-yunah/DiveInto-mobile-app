import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { TabBarStyles as styles } from './styles';
import * as Color from '../../config/colors';

type Route = {
  key: string;
  name: string;
  params?: object | undefined;
};

export default function TabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabWrapper}>
        {state.routes.map((route: Route, index: number) => {
          const { options } = descriptors[route.key];
          const label = options.title;
          const isFocused = state.index === index;

          console.log(route.key);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              style={[styles.tabButton, isFocused && styles.activeTabButton]}
              onPress={onPress}
              key={`tab_${index}`}
            >
              <Text style={[styles.tabText, isFocused && styles.activeTabText]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
