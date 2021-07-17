import React, { ReactElement} from 'react'
import { View , Text} from 'react-native';
import styles  from './styles';
import {CommunityMain } from '@components/CommunityMain';
import {QuestionaryContentsList } from '@components/CommunityMain';
import NextButton from '@components/CommunityMain/NextButton'

import { CommunityPostingProps, CommunityDetailProps } from '@navigators/CommunityStack/types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect } from 'react';

const Tab= createMaterialTopTabNavigator();

export default function CommunityMainScreen({navigation}: CommunityPostingProps): ReactElement {
  const addContent = () => navigation.navigate('CommunityPosting')

  useEffect(()=> {
    navigation.setOptions({
      headerRight: () => <NextButton text='글쓰기' onPress={addContent} />
    })
  },[])

  return (
    <View style={styles.container}  > 
    <Tab.Navigator  
      tabBarOptions={{
        labelStyle: { fontSize: 18 }, 
        activeTintColor:'#50CAD2', 
        inactiveTintColor: '#6A6D70', 
        indicatorStyle: {borderColor: '#50CAD2', borderWidth: 1} }}  
    >
      <Tab.Screen 
        name="공유해요" 
        // component={SharedContents}
        children={()=> <SharedContents/> }
      />
      <Tab.Screen 
        name="궁금해요"
        component={QuestionaryContents} 
        />
    </Tab.Navigator>
    </View>
  );
}

const SharedContents = ({onItemClick}:any):ReactElement => {
  return (<CommunityMain />)
}

const QuestionaryContents = () => {
return (<>
  <Text>not yet</Text>
</>
)}
