import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from '../CommunityMain/styles';
import LectureLikeScreen from './LectureLike';
import CommunityLikeScreen from './CommunityLike';

const Tab = createMaterialTopTabNavigator();

export default function LikeCollectionScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 18 },
          activeTintColor: '#50CAD2',
          inactiveTintColor: '#6A6D70',
          indicatorStyle: { borderColor: '#50CAD2', borderWidth: 1 },
        }}
      >
        <Tab.Screen
          name="LectureLike"
          component={LectureLikeScreen}
          options={{ title: '강의' }}
        />
        <Tab.Screen
          name="CommunityLike"
          component={CommunityLikeScreen}
          options={{ title: '커뮤니티' }}
        />
      </Tab.Navigator>
    </View>
  );
}
