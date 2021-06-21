import React, { ReactElement, Suspense} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import {CommunityList} from '@components/CommunityMain'


export default function CommunityMain({navigation}): ReactElement {

  const watchContentDetail= () => navigation.navigate('CommunityDetail')

  return (
    <>
        <View style={styles.tabContainer}>
          <TouchableOpacity>
            <Text style={styles.tab}>공유해요</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tab}>궁금해요</Text>
          </TouchableOpacity>
        </View>
        <Suspense fallback={<Text>Loading...</Text>}>
        {/* Render 되는 ListItem이 들어올 자리*/}
          <CommunityList onPress={watchContentDetail}/>
        </Suspense>
    </>
  );
}
