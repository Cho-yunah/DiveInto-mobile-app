import React, { ReactElement} from 'react'
import { View , Text} from 'react-native';
import styles  from './styles';

import {CommunityMain } from '@components/CommunityMain';
import {QuestionaryContentsList } from '@components/CommunityMain';
import NextButton from '@components/CommunityMain/NextButton'

import { CommunityPostingProps, CommunityDetailProps } from '@navigators/CommunityStack/types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab= createMaterialTopTabNavigator();

export default function CommunityMainScreen({navigation}: CommunityPostingProps): ReactElement {
  const addContent = () => navigation.navigate('CommunityPosting')
  const onItemClick = ()=> navigation.navigate('CommunityDetail')

  navigation.setOptions({
    headerRight: () => <NextButton text='글쓰기' onPress={addContent} />
  })

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
        children={()=> <SharedContents onItemClick={onItemClick}/> }
      />
      <Tab.Screen 
        name="궁금해요"
        component={QuestionaryContents} 
        />
    </Tab.Navigator>
    </View>
  );
}

const SharedContents = ({onItemClick}):ReactElement => {
  return (<CommunityMain onItemClick={onItemClick}/>)
}

const QuestionaryContents = () => {
return (<>
  <QuestionaryContentsList/>
</>
)}
